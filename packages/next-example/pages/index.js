import { Accordion, LoginForm } from "components";

debugger;
export default () => (
  <div>
    <h1>Welcome to next.js!</h1>
    <Accordion />
    <LoginForm
      onLoginSuccess={() => console.log("onLoginSuccess")}
      onLoginError={() => console.log("onLoginError")}
    />
  </div>
);
