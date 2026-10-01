import Link from "next/link";
import { requireChatGPTUser, chatGPTSignOutPath } from "../chatgpt-auth";
export const dynamic = "force-dynamic";
export default async function Account() {
  const user = await requireChatGPTUser("/account");
  return (
    <main>
      <p className="eyebrow">YOUR ACCOUNT</p>
      <h1>You’re signed in.</h1>
      <p className="intro">
        This page is rendered only after the server verifies that this Site has
        supplied a signed-in identity.
      </p>
      <section className="panel">
        <p className="status">Session active</p>
        <h2>{user.fullName ?? "Welcome to your account"}</h2>
        <dl>
          <dt>Email</dt>
          <dd>{user.email}</dd>
          <dt>Account data</dt>
          <dd>
            Shown from this session. This starter does not save profile data.
          </dd>
        </dl>
        <div className="actions">
          <a className="button" href={chatGPTSignOutPath("/")} target="_top">
            Sign out
          </a>
          <Link href="/">Back to the welcome page</Link>
        </div>
      </section>
      <p className="note">
        Sign-in identifies a visitor. Add separate server-side permissions
        before introducing shared data or admin features.
      </p>
    </main>
  );
}
