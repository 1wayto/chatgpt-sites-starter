# Launch Your First ChatGPT Site

A small independent 1wayto community example: a public welcome page, native Sites sign-in, a server-protected account page, and sign-out.

Repository: [1wayto/chatgpt-sites-starter](https://github.com/1wayto/chatgpt-sites-starter). Released under the [MIT License](LICENSE), copyright 2026 Kyeong Jun (Eric) Lee. Upstream component notices remain in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Run locally

Use Node 22 LTS (22.13+) or Node 24+.

```sh
npm ci
npm run setup:local
npm run dev
```

Open the localhost URL printed by the server. The official Sites Vite integration supplies a loopback-only **synthetic** account (`seedy@sites.test`) for local testing. This does not perform real ChatGPT OAuth. No credentials, database, or storage are needed for this example. Keep the development server on localhost.

```sh
npm run typecheck
npm run lint
npm test
npm run build
```

## Native authentication

- `/` is public and starts sign-in using a normal top-level browser link.
- `/account` is a dynamic server-rendered route. It calls `requireChatGPTUser('/account')` before rendering identity details.
- `app/chatgpt-auth.ts` reads the trusted Sites identity headers and validates same-origin return paths.
- Sites owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, and its session cookies. This app does not implement those routes or manage passwords/tokens.
- Sign-in requires both the Site-scoped user ID and email. Optional names are decoded only with the platform encoding marker. Profile information is not stored by this starter.
- Authentication identifies a visitor. It does not grant workspace membership or an admin role. Add explicit authorization before introducing shared data or privileged actions.

This works on a supported ChatGPT Sites deployment with its trusted dispatcher. It is not a universal 'Login with ChatGPT' OAuth library for arbitrary websites. A generic server accepting caller-supplied identity headers is unsafe; do not expose one as a production authentication solution.

## Deploy your own copy

No production project ID or inherited Git history is included. `.openai/hosting.example.json` disables D1 and R2. `setup:local` copies it to ignored `.openai/hosting.json` without overwriting operator configuration.

When you authorize deployment, register a new Site through the supported Sites workflow, keep its generated project configuration private, and choose the audience deliberately. A public Site can keep the welcome page public while the account page requires sign-in. Do not reuse another project's ID or security settings. No database, MCP credentials, or app-owned OAuth client is required by this starter.

A built Worker alone does not provide production sign-in. The Sites dispatcher must strip untrusted identity headers and inject authenticated identity. Real hosted sign-in/return/sign-out verification is required after an authorized deployment; local synthetic tests do not establish it.

## Acceptance criteria

1. The public welcome page loads without signing in on desktop and mobile.
2. An anonymous `/account` request starts native sign-in and returns to `/account`.
3. Only the current signed-in user's supplied profile is visible there.
4. Signing out returns to the public page; reopening `/account` requires sign-in.
5. External return URLs are rejected and auth navigation uses native anchors.
6. No passwords, OAuth tokens, account databases, or production IDs enter the repository.
7. The project is identified as an independent example, not an official OpenAI product.

## Provenance and scope

Based on the bundled Sites vinext starter and its native `app/chatgpt-auth.ts` helper. The vendored Sites Vite plugin retains its upstream MIT notice. Dependencies retain their own licenses. Welcome/account UI, CSS, and geometric S favicon were authored for this example; no third-party marketing artwork is included.

There is no MCP server, project directory, repository automation, account administration, database, or general external OAuth implementation here. The main Codex for Everything application is a separate project and pending public-release decision.

## Dependency checks

Run npm audit before publishing. The lockfile uses patched official registry packages. A scoped satori > fflate 0.7.5 override addresses GHSA-px8p-9vwx-vf98 without downgrading vinext. This starter does not expose image generation. Keep the upstream component license notice intact.


