import { JsonStorage } from "./modules/storage/json.ts";
import { TextStorage } from "./modules/storage/text.ts";
import { assert, assertRejects } from "@std/assert";

Deno.test("TextStorage", async () => {
	const storage = new TextStorage("test.txt", "Hello");

	await storage.init();
	assert(storage.data, "Hello");

	storage.data = "Hello World!";
	await storage.save();
	assert(storage.data, "Hello World!");

	await storage.load();
	assert(storage.data.includes("Hello World!"));

	await Deno.removeSync("test.txt");
});

Deno.test("JsonStorage", async () => {
	const storage = new JsonStorage("test.json", {
		name: "John",
		age: 25,
	});
	await storage.init();
	await storage.save();
	await storage.load();
	assert(storage.data.name === "John");
	assert(storage.data.age === 25);
	await Deno.remove("test.json");
});

Deno.test("JsonStorage Middleware", async () => {
	const storage = new JsonStorage("test.json", {
		name: "John",
		age: 25,
	});
	storage.middleware.use((data) => {
		data.name = "Jane";
	});
	await storage.init();
	await storage.save();
	await storage.load();
	assert(storage.data.name === "Jane");
	assert(storage.data.age === 25);
	await Deno.remove("test.json");
});

Deno.test("JsonStorage Validation", async () => {
	const storage = new JsonStorage("test.json", {
		name: "John",
		age: 17,
	});

	storage.middleware.use((data) => {
		if (data.age < 18) {
			throw new Error("You must be at least 18 years old to use this program.");
		}
	});

	await assertRejects(async () => await storage.init());
});
