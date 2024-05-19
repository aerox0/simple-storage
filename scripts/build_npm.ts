import { build, emptyDir } from "@deno/dnt";
import deno from "../deno.json" with { type: "json" };

await emptyDir("./npm");

await build({
	entryPoints: ["./mod.ts"],
	outDir: "./npm",
	shims: {
		deno: false,
	},
	test: false,
	package: {
		name: "@aerox0/simple-storage",
		version: Deno.args[0] || deno.version,
		description:
			"This is a simple file storage package that helps you to save data into file in formats like plaintext, json, yaml or even create your own formatter.",
		license: "MIT",
		repository: {
			type: "git",
			url: "git+https://github.com/aerox0/simple-storage.git",
		},
		bugs: {
			url: "https://github.com/aerox0/simple-storage/issues",
		},
	},
	postBuild() {
		Deno.copyFileSync("LICENSE", "npm/LICENSE");
		Deno.copyFileSync("README.md", "npm/README.md");
	},
});
