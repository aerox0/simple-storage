import { SimpleFileStorageBase } from './base';
export declare class SimpleFileStorageJson<T extends {}> extends SimpleFileStorageBase<T> {
    data: T;
    constructor(file_path: string, data?: T);
    stringifyData(data: T): Promise<string>;
    parseData(data_str: string): Promise<T>;
}
