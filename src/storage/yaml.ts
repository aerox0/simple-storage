import { StorageBase } from "./base.ts";
import * as yaml from "jsr:@std/yaml@^0.224.0";

export class YamlStorage<T extends {}> extends StorageBase<T> {
	/**
	 * @param  {string} filePath
	 * @param  {T} data Passing data to constructor and then call save() will create a new file with data already inside it.
	 */
	constructor(filePath: string, data = {} as T) {
		super(filePath, data);
	}

	async parse(rawData: string): Promise<T> {
		return yaml.parse(rawData) as T;
	}

	async stringify(data: T): Promise<string> {
		return yaml.stringify(data);
	}
}
