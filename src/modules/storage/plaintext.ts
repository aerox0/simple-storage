import { SimpleFileStorageBase } from './base'

export class SimpleFileStoragePlaintext extends SimpleFileStorageBase<string> {
	data: string

	/**
	 * @param  {string} file_path
	 * @param  {string=''} data Passing data to constructor and then call save() will create a new file with data already inside it.
	 */
	constructor(file_path: string, data: string = '') {
		super(file_path, data)
	}

	async parseData(data_str: string): Promise<string> {
		return data_str
	}

	async stringifyData(data: string): Promise<string> {
		return data
	}
}
