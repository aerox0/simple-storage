# Description

This is a simple file storage package that helps you to save data into file in formats like plaintext, json, yaml. Fully supports typescript.

To use YAML formatter you have to install "yaml" package.

## How to use

### Basic example:

```ts
import { SimpleFileStoragePlaintext } from '@aerox0/simple-file-storage/modules/plaintext'
import { SimpleFileStorageJson } from '@aerox0/simple-file-storage/modules/json'
import { SimpleFileStorageYaml } from '@aerox0/simple-file-storage/modules/yaml'

const yaml = new SimpleFileStorageYaml('public/storage.yaml', { text: 'Hello' })
yaml.data.text += ' World'
// --- OR ---
const yaml = new SimpleFileStorageYaml<{ text: string }>('public/storage.yaml')
yaml.data.text = 'Hello World'

await yaml.save() // will create file with passed data
await yaml.load() // will overwrite this.data with data from file

console.log(yaml.data.text) // Hello World
```

### Save data with dynamic file path example:

```ts
const yaml = new SimpleFileStorageYaml<{ id: number }>('public/storage.yaml')

for (int i = 10; i <= 10; i++) {
	yaml.file_path = `public/${i}.yaml`
	yaml.data.id = i
	await yaml.save()
}
```

## Advanced

You can add support for any format you want by extending "SimpleFileStorage" abstract class.

```ts
import { SimpleFileStorage } from '@aerox0/simple-file-storage/modules/types'

export class StorageXaml<T extends {}> extends SimpleFileStorage {
	data: T

	constructor(file_path: string, data = {} as T) {
		super(file_path)
		this.data = data
	}

	async load(): Promise<void> {
		this.data = XAML.parse(await this.readStorageFile())
		return
	}

	async save(): Promise<void> {
		this.createStorageFile(XAML.stringify(this.data))
		return
	}
}

const xaml = new StorageXaml('public/storage.xaml', { text: 'Hello World' })
```
