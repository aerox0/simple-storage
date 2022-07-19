import { SimpleFileStorageMiddleware } from './middleware'
import { SimpleFileStorageStream } from './stream'

export abstract class SimpleFileStorageBase<T> {
	file_path: string
	data: T
	private data_str: string = ''
	private middleware: SimpleFileStorageMiddleware<T>
	private stream: SimpleFileStorageStream

	constructor(file_path: string) {
		this.middleware = new SimpleFileStorageMiddleware<T>()
		this.stream = new SimpleFileStorageStream(file_path)
	}

	abstract stringifyData(data: T): Promise<string>
	abstract parseData(data_str: string): Promise<T>

	async load(): Promise<void> {
		await this.load_str()
		const data = await this.parseData(this.data_str)

		await this.validate(data)

		this.data = data

		return
	}

	async save(): Promise<void> {
		await this.validate(this.data)

		this.data_str = await this.stringifyData(this.data)

		await this.save_str()
		return
	}

	async validate(data?: T): Promise<void> {
		await this.middleware.run(data || this.data)
		return
	}

	private async load_str(): Promise<void> {
		this.data_str = await this.stream.readStorageFile()
		return
	}

	private async save_str(): Promise<void> {
		await this.stream.createStorageFile(this.data_str)
		return
	}
}
