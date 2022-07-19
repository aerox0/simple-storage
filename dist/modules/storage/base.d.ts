import { SimpleFileStorageMiddleware } from './middleware';
export declare abstract class SimpleFileStorageBase<T> {
    file_path: string;
    data: T;
    middleware: SimpleFileStorageMiddleware<T>;
    private data_str;
    private stream;
    constructor(file_path: string);
    abstract stringifyData(data: T): Promise<string>;
    abstract parseData(data_str: string): Promise<T>;
    load(): Promise<void>;
    save(): Promise<void>;
    validate(data?: T): Promise<void>;
    private load_str;
    private save_str;
}
