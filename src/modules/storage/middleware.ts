export class SimpleFsMiddleware<T> {
	list: ((data: T) => Promise<void> | void)[]

	constructor() {
		this.list = []
	}

	use(middleware: (data: T) => Promise<void> | void): void {
		this.list.push(middleware)
	}

	async run(data: T): Promise<void> {
		for (const middleware of this.list) {
			await middleware(data)
		}
	}
}
