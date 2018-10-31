import { component, useState } from "@matthewp/haunted";
import { html } from "lit-html";
import "./FullName.js";
import "./style.css";

function App() {
  const [name, setName] = useState("");

  return html`
    <h2>User Page</h2>

    <h3>${name}</h3>

    <p>Change name:</p>
    <full-name
      @change=${ev => setName(ev.detail)}>
    </full-name>    
  `;
}

customElements.define("my-app", component(App));
