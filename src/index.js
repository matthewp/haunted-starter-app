import {
  component,
  useState,
  html
} from "https://unpkg.com/haunted/haunted.js";
import "./FullName.js";

function App() {
  const [name, setName] = useState("");

  return html`
    <h2>User Page</h2>

    <h3>${name}</h3>

    <fieldset>
      <legend>Change name:</legend>
      <full-name @change=${ev => setName(ev.detail)}></full-name>
    </fieldset>

    <style>
      fieldset {
        border: none;
      }

      legend {
        padding: 0;
        margin-bottom: 0.5rem;
      }
    </style>
  `;
}

customElements.define("my-app", component(App));
