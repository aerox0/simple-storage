import { SimpleFsBase } from './base'

export class SimpleFsJson<T extends {}> extends SimpleFsBase<T> {
	/**
	 * @param  {string} file_path
	 * @param  {T} data Passing data to constructor and then call save() will create a new file with data already inside it.
	 */
	constructor(file_path: string, data = {} as T) {
		super(file_path, data)
	}

	async stringifyData(data: T): Promise<string> {
		return JSON.stringify(data)
	}

	async parseData(data_str: string): Promise<T> {
		return JSON.parse(data_str)
	}
}
