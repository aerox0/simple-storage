import * as fs from "node:fs";
import * as fsa from "node:fs/promises";
import path from "node:path";

export class StorageStream {
	filePath: string;

	constructor(filePath: string) {
		this.filePath = filePath;
	}

	async init(data = ""): Promise<void> {
		const dir_path = path.dirname(this.filePath);
		if (!fs.existsSync(this.filePath)) {
			await fsa.mkdir(dir_path, { recursive: true });
			await fsa.writeFile(this.filePath, data, { flag: "w" });
		}
	}

	async write(data = ""): Promise<void> {
		await fsa.writeFile(this.filePath, data, { flag: "w" });
		return;
	}

	async read(): Promise<string> {
		return await fsa.readFile(this.filePath, { encoding: "utf8" });
	}
}
