import { StorageMiddleware } from "./middleware.ts";
import { StorageStream } from "./stream.ts";

export abstract class StorageBase<T> {
	private rawData = "";
	private stream: StorageStream;
	filePath: string | undefined;
	data: T;
	middleware: StorageMiddleware<T>;

	constructor(filePath: string, data: T) {
		this.middleware = new StorageMiddleware<T>();
		this.stream = new StorageStream(filePath);
		this.data = data;
	}

	async init(): Promise<this> {
		await this.validate(this.data);
		await this.stream.init(await this.stringify(this.data));
		return this;
	}

	abstract stringify(data: T): Promise<string>;
	abstract parse(rawData: string): Promise<T>;

	async load(): Promise<void> {
		await this.loadData();
		const data = await this.parse(this.rawData);

		await this.validate(data);
		this.data = data;

		return;
	}

	async save(): Promise<void> {
		await this.validate(this.data);

		this.rawData = await this.stringify(this.data);

		return await this.saveData();
	}

	async validate(data?: T): Promise<void> {
		return await this.middleware.run(data || this.data);
	}

	private async loadData(): Promise<void> {
		this.rawData = await this.stream.read();
		return;
	}

	private async saveData(): Promise<void> {
		return await this.stream.write(this.rawData);
	}
}
