import { SimpleFileStorage } from './types';
export declare class SimpleFileStoragePlaintext extends SimpleFileStorage {
    data: string;
    constructor(file_path: string, data?: string);
    load(): Promise<void>;
    save(): Promise<void>;
}
