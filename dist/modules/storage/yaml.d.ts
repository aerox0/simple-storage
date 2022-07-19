import { SimpleFileStorageBase } from './base';
export declare class SimpleFileStorageYaml<T extends {}> extends SimpleFileStorageBase<T> {
    data: T;
    constructor(file_path: string, data?: T);
    parseData(data_str: string): Promise<T>;
    stringifyData(data: T): Promise<string>;
}
