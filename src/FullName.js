import {
  component,
  html,
  useState
} from "https://unpkg.com/haunted/haunted.js";

function dispatch(el, first, last) {
  let event = new CustomEvent("change", {
    detail: first + " " + last
  });
  el.dispatchEvent(event);
}

function FullName(el) {
  const [first, setFirst] = useState("Happy");
  const [last, setLast] = useState("Halloween 🎃");

  dispatch(el, first, last);

  return html`
    <div class="container">
      <label for="first-name">First</label>
      <input
        value=${first}
        @keyup=${ev => setFirst(ev.target.value)}
        type="text"
        name="first"
        id="first-name"
      />

      <label for="last-name">Last</label>
      <input
        value=${last}
        @keyup=${ev => setLast(ev.target.value)}
        type="text"
        name="last"
        id="last-name"
      />
    </div>

    <style>
      .container {
        border: none;
        display: grid;
        grid-template-columns: 20% 80%;
      }

      input {
        border: 1px solid #e5e5e5;
        padding: 6px 10px;
        margin-bottom: 1em;
      }
    </style>
  `;
}

customElements.define("full-name", component(FullName));
