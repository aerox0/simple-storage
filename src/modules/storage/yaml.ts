import { SimpleFileStorage } from './types'
const yaml = require('yaml')

export class SimpleFileStorageYaml<T extends {}> extends SimpleFileStorage {
	data: T

	/**
	 * @param  {string} file_path
	 * @param  {T} data Passing data to constructor and then call save() will create a new file with data already inside it.
	 */
	constructor(file_path: string, data = {} as T) {
		super(file_path)
		this.data = data
	}

	async load(): Promise<void> {
		this.data = yaml.parse(await this.readStorageFile())
		return
	}

	async save(): Promise<void> {
		this.createStorageFile(yaml.stringify(this.data))
		return
	}
}
