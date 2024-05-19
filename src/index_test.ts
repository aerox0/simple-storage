import { expect, test } from "bun:test";
import fsa from "node:fs/promises";
import { JsonStorage } from "./storage/json.ts";
import { TextStorage } from "./storage/text.ts";

test("TextStorage", async () => {
	const storage = new TextStorage("test.txt", "Hello");

	await storage.init();
	expect(storage.data).toBe("Hello");

	storage.data = "Hello World!";
	await storage.save();
	expect(storage.data).toBe("Hello World!");

	await storage.load();
	expect(storage.data).toBe("Hello World!");

	await fsa.rm("test.txt");
});

test("JsonStorage", async () => {
	const storage = new JsonStorage("test.json", {
		name: "John",
		age: 25,
	});
	await storage.init();
	await storage.save();
	await storage.load();
	expect(storage.data.name).toBe("John");
	expect(storage.data.age).toBe(25);
	await fsa.rm("test.json");
});

test("JsonStorage Middleware", async () => {
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
	expect(storage.data.name).toBe("Jane");
	expect(storage.data.age).toBe(25);
	await fsa.rm("test.json");
});

test("JsonStorage Validation", async () => {
	const storage = new JsonStorage("test.json", {
		name: "John",
		age: 17,
	});

	storage.middleware.use((data) => {
		if (data.age < 18) {
			throw new Error("You must be at least 18 years old to use this program.");
		}
	});

	expect(async () => await storage.init()).toThrow();
});
