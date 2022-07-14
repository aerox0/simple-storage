export declare abstract class SimpleFileStorage {
    file_path: string;
    constructor(file_path: string);
    abstract load(): Promise<void>;
    abstract save(): Promise<void>;
    createStorageFile(data?: string): Promise<any>;
    readStorageFile(): Promise<string>;
}
