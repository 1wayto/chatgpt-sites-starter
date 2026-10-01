import assert from "node:assert/strict";
import test from "node:test";
import { chatGPTSignInPath, chatGPTSignOutPath } from "../app/chatgpt-auth";
test("preserves a same-origin return destination", () => {
  assert.equal(
    chatGPTSignInPath("/account?tab=profile"),
    "/signin-with-chatgpt?return_to=%2Faccount%3Ftab%3Dprofile",
  );
});
test("rejects external or reserved return paths", () => {
  for (const value of [
    "https://evil.example/",
    "//evil.example/",
    "/\\evil.example/",
    "/signin-with-chatgpt",
    "/signout-with-chatgpt",
    "/callback",
  ]) {
    assert.equal(
      chatGPTSignInPath(value),
      "/signin-with-chatgpt?return_to=%2F",
    );
  }
});
test("sign-out returns to the public welcome page", () => {
  assert.equal(chatGPTSignOutPath(), "/signout-with-chatgpt?return_to=%2F");
});
