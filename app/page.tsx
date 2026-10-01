import {
  getChatGPTUser,
  chatGPTSignInPath,
  chatGPTSignOutPath,
} from "./chatgpt-auth";
export const dynamic = "force-dynamic";
export default async function Home() {
  const user = await getChatGPTUser();
  return (
    <main>
      <p className="eyebrow">YOUR FIRST WORKING SITE</p>
      <h1>
        A public welcome.
        <br />A private account.
      </h1>
      <p className="intro">
        Start with one useful flow: open a site, sign in with ChatGPT, and reach
        a page that belongs to your session.
      </p>
      <section className="panel">
        <p className="eyebrow">{user ? "SIGNED IN" : "READY TO TRY"}</p>
        <h2>{user ? "Your session is ready." : "Try native Sites sign-in."}</h2>
        <p>
          {user
            ? "Open your account page to see the identity provided by this Site."
            : "The welcome page is public. Your account page requires sign-in."}
        </p>
        <div className="actions">
          {user ? (
            <>
              <a className="button" href="/account" target="_top">
                Open your account
              </a>
              <a href={chatGPTSignOutPath("/")} target="_top">
                Sign out
              </a>
            </>
          ) : (
            <a
              className="button"
              href={chatGPTSignInPath("/account")}
              target="_top"
            >
              Sign in with ChatGPT
            </a>
          )}
        </div>
      </section>
      <section className="steps" aria-label="Starter workflow">
        <div>
          <span>01</span>
          <h3>Set up your Site</h3>
          <p>Use your own Sites project and choose its audience.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Keep sign-in native</h3>
          <p>Sites handles the browser sign-in and session.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Protect the account</h3>
          <p>Check identity on the server before showing account details.</p>
        </div>
      </section>
      <p className="note">
        This example demonstrates authentication on supported ChatGPT Sites. It
        does not provide a general OAuth service for other websites.
      </p>
    </main>
  );
}
