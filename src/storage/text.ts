import { StorageBase } from "./base.ts";

export class TextStorage extends StorageBase<string> {
	/**
	 * @param  {string} filePath
	 * @param  {string=''} data Passing data to constructor and then call save() will create a new file with data already inside it.
	 */
	constructor(filePath: string, data = "") {
		super(filePath, data);
	}

	async parse(rawData: string): Promise<string> {
		return rawData;
	}

	async stringify(data: string): Promise<string> {
		return data;
	}
}
