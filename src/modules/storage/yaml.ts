import { SimpleFsBase } from './base'
const yaml = require('yaml')

export class SimpleFsYaml<T extends {}> extends SimpleFsBase<T> {
	/**
	 * @param  {string} file_path
	 * @param  {T} data Passing data to constructor and then call save() will create a new file with data already inside it.
	 */
	constructor(file_path: string, data = {} as T) {
		super(file_path, data)
	}

	async parseData(data_str: string): Promise<T> {
		return yaml.parse(data_str)
	}

	async stringifyData(data: T): Promise<string> {
		return yaml.stringify(data)
	}
}
