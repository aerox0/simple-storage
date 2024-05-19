import { StorageBase } from "./base.ts";

export class JsonStorage<T extends {}> extends StorageBase<T> {
	/**
	 * @param  {string} filePath
	 * @param  {T} data Passing data to constructor and then call save() will create a new file with data already inside it.
	 */
	constructor(filePath: string, data = {} as T) {
		super(filePath, data);
	}

	async stringify(data: T): Promise<string> {
		return JSON.stringify(data);
	}

	async parse(rawData: string): Promise<T> {
		return JSON.parse(rawData);
	}
}
