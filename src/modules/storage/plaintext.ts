import { SimpleFileStorage } from './types'

export class SimpleFileStoragePlaintext extends SimpleFileStorage {
	data: string

	/**
	 * @param  {string} file_path
	 * @param  {string=''} data Passing data to constructor and then call save() will create a new file with data already inside it.
	 */
	constructor(file_path: string, data: string = '') {
		super(file_path)
		this.data = data
	}

	async load(): Promise<void> {
		this.data = await this.readStorageFile()
		return
	}

	async save(): Promise<void> {
		this.createStorageFile(this.data)
		return
	}
}
