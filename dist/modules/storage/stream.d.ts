export declare class SimpleFileStorageStream {
    file_path: string;
    constructor(file_path: string);
    createStorageFile(data?: string): Promise<any>;
    readStorageFile(): Promise<string>;
}
