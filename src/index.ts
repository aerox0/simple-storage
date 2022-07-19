export * from './modules/storage/plaintext'
export * from './modules/storage/yaml'
export * from './modules/storage/json'
export * from './modules/storage/base'
// import { SimpleFileStorageYaml } from './modules/storage/yaml'

// const main = async () => {
// 	const yaml = new SimpleFileStorageYaml<{ text: string }>('public/storage.yaml')
// 	yaml.middleware.use((data) => {
// 		if (data.text === 'Hello World') throw new Error('Invalid data')
// 	})

// 	yaml.data.text = 'Hello World'

// 	await yaml.validate()

// 	await yaml.save()
// 	await yaml.load()
// 	console.log(yaml.data)
// }

// main().catch((err) => {
// 	throw new Error(err)
// })
