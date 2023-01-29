# Description

This is a simple file storage package that helps you to save data into file in formats like plaintext, json, yaml or even create your own formatter. Fully supports typescript.

To use YAML formatter you have to install "yaml" package.

## How to use

### Installation

```
<!-- With npm -->
npm install simple-fs

<!-- With yarn -->
yarn add simple-fs
```

### Basic example

```ts
// import { SimpleFsPlaintext } from ...
// import { SimpleFsJson } from ...
// import { SimpleFsYaml } from ...

const yaml = await new SimpleFsYaml('public/storage.yaml', { text: 'Hello' }).init() // init will create path with file that contains text: 'Hello'
yaml.data.text += ' World'
// --- OR ---
const yaml = await new SimpleFsYaml<{ text: string }>('public/storage.yaml').init() // init will create path with empty file
yaml.data.text = 'Hello World'

await yaml.save() // will save data into file
await yaml.load() // will overwrite yaml.data with data from file, you usually calling this before assign any data

console.log(yaml.data.text) // Hello World
```

### Using middleware

```ts
const json = await new SimpleFsJson('public/storage.json', { text: '' }).init()

json.middleware.use((data) => {
 if (data.text.length < 1) throw Error('Data.text can not be empty.')
}) // you can add as many middlewares as you want

await json.validate() // we can validate manually
await json.validate({ text: "It's OK" }) // or validate custom data before assign them to json.data

await json.save() // save and load automatically validate data before applying next changes
await json.load()

console.log(json.data)
```

### Save data with dynamic file path example

```ts
const yaml = await new SimpleFsYaml<{ id: number }>('public/storage.yaml').init() // will create empty public/storage.yaml file

for (int i = 10; i <= 10; i++) {
 yaml.file_path = `public/${i}.yaml`
 yaml.data.id = i
 await yaml.init() // will create public/${i}.yaml file with data {id: i}
}
```

### Create custom formatter

You can add support for any format you want by extending "SimpleFsBase" abstract class.

```ts
export class StorageXaml<T extends {}> extends SimpleFsBase<T> {
 constructor(file_path: string, data = {} as T) {
  super(file_path, data)
 }

 async stringifyData(data: T): Promise<string> {
  return XAML.stringify(data)
 }

 async parseData(data_str: string): Promise<T> {
  return XAML.parse(data_str)
 }
}

const xaml = await new StorageXaml('public/storage.xaml', { text: 'Hello World' }).init()
```
