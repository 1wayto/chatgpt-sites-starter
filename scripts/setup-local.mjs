import {copyFileSync,existsSync} from "node:fs";
if(!existsSync(".openai/hosting.json"))copyFileSync(".openai/hosting.example.json",".openai/hosting.json");
console.log("Local configuration ready; no Site, credential, or database was created.");
