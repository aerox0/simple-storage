import * as fs from "@std/fs";

export class StorageStream {
	filePath: string;

	constructor(filePath: string) {
		this.filePath = filePath;
	}

	async init(data = ""): Promise<void> {
		const dirPath = this.filePath.split("/").slice(0, -1).join("/");
		await fs.ensureDir(dirPath);

		const encoder = new TextEncoder();
		const encoded = encoder.encode(data);
		await Deno.writeFile(this.filePath, encoded, { create: true });
	}

	async write(data = ""): Promise<void> {
		const encoder = new TextEncoder();
		const encoded = encoder.encode(data);
		return await Deno.writeFile(this.filePath, encoded, { create: true });
	}

	async read(): Promise<string> {
		const decoder = new TextDecoder("utf-8");
		const data = await Deno.readFile(this.filePath);
		return decoder.decode(data);
	}
}
