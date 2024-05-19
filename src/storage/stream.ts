import * as fs from "node:fs";

export class StorageStream {
	filePath: string;

	constructor(filePath: string) {
		this.filePath = filePath;
	}

	async init(data = ""): Promise<void> {
		const dir_path = this.filePath.split("/").slice(0, -1).join("/");
		if (!fs.existsSync(this.filePath)) {
			await fs.promises.mkdir(dir_path, { recursive: true });
			await fs.promises.writeFile(this.filePath, data, { flag: "w" });
		}
	}

	async write(data = ""): Promise<void> {
		await fs.promises.writeFile(this.filePath, data, { flag: "w" });
		return;
	}

	async read(): Promise<string> {
		return await fs.promises.readFile(this.filePath, { encoding: "utf8" });
	}
}
