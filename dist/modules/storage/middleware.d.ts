export declare class SimpleFileStorageMiddleware<T> {
    list: ((data: T) => Promise<void> | void)[];
    constructor();
    use(middleware: (data: T) => Promise<void> | void): void;
    run(data: T): Promise<void>;
}
