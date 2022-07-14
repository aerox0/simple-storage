import { SimpleFileStorage } from './types';
export declare class SimpleFileStorageYaml<T extends {}> extends SimpleFileStorage {
    data: T;
    constructor(file_path: string, data?: T);
    load(): Promise<void>;
    save(): Promise<void>;
}
