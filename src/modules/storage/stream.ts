import fs from 'fs'

export class SimpleFileStorageStream {
	file_path: string

	constructor(file_path: string) {
		this.file_path = file_path
	}

	async init(data: string = ''): Promise<void> {
		const dir_path = this.file_path.split('/').slice(0, -1).join('/')
		if (!fs.existsSync(this.file_path)) {
			await fs.promises.mkdir(dir_path, { recursive: true })
			await fs.promises.writeFile(this.file_path, data, { flag: 'w' })
		}
	}

	async writeStorageFile(data: string = ''): Promise<any> {
		await fs.promises.writeFile(this.file_path, data, { flag: 'w' })
		return
	}

	async readStorageFile(): Promise<string> {
		return await fs.promises.readFile(this.file_path, { encoding: 'utf8' })
	}
}
