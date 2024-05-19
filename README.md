# Description

This is a simple file storage package that helps you to save data into file in formats like plaintext, json, yaml or even create your own formatter.

## Instrucitons

### How to install

```
<!-- With npm -->
npm install @aerox0/simple-storage

```

### How to use

Basic Example

```ts
import { JsonStorage } from '@aerox0/simple-storage';
import { YamlStorage } from '@aerox0/simple-storage';
import { TextStorage } from '@aerox0/simple-storage';

const storage = new JsonStorage("test.json", {
  name: "John",
  age: 25,
});
// OR you can define the storage using typescript
const storage = new JsonStorage<{name: string, age: number}>("test.json")
storage.data = {name: "John", age: 25};

await storage.init(); // will create the file and dir if do not exists with the default content

storage.data.age = 17;
await storage.save(); // will save the data into the file

await storage.load(); // will load the data from the file into storage.data
```

Example Using Middlewares and Validation

```ts
import { JsonStorage } from '@aerox0/simple-storage';

const storage = new JsonStorage("test.json", {
  name: "John",
  age: 25,
});

storage.middleware.use((data) => {
  if (data.age < 18) {
    throw new Error("You must be at least 18 years old to use this program.");
  }
});

// will throw an error if the number is lower than 18
await storage.init()
await storage.save()
await storage.validate()
await storage.load()

// also you can validate by passing the data to validate
await storage.validate({age: 17}) // will validate only the data from argument
await storage.validate() // will validate data from storage.data
```

Create your own Storage

```ts
import { StorageBase } from '@aerox0/simple-storage';

class EncryptedJsonStorage extends StorageBase {
  constructor(filePath: string, data = {} as T) {
		super(filePath, data);
	}

	async stringify(data: T): Promise<string> {
    const te = new TextEncoder();
		return te.encode(JSON.stringify(data));
	}

	async parse(rawData: string): Promise<T> {
    const td = new TextDecoder();
		return JSON.parse(td.decode(rawData));
	}
}
```
