export * from './modules/storage/plaintext'
export * from './modules/storage/yaml'
export * from './modules/storage/json'
export * from './modules/storage/base'

// import { SimpleFileStoragePlaintext } from './modules/storage/plaintext'

// const main = async () => {
// 	const plaintext = await new SimpleFileStoragePlaintext('public/storage.txt').init()
// 	await plaintext.load()

// 	await plaintext.save()
// 	console.log(plaintext.data)
// }

// main().catch((err) => {
// 	throw new Error(err)
// })
