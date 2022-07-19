import { SimpleFileStorageBase } from './base';
export declare class SimpleFileStoragePlaintext extends SimpleFileStorageBase<string> {
    data: string;
    constructor(file_path: string, data?: string);
    parseData(data_str: string): Promise<string>;
    stringifyData(data: string): Promise<string>;
}
