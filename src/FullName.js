import {
  html,
  component,
  useState,
  useEffect
} from "https://unpkg.com/haunted/haunted.js";

function FullName(el) {
  const [first, setFirst] = useState("Happy");
  const [last, setLast] = useState("Halloween 🎃");

  useEffect(() => {
    const event = new CustomEvent('change', {
      detail: `${first} ${last}`
    });
    this.dispatchEvent(event);
  }, [first, last]);

  return html`
    <div class="container">
      <label for="first">First</label>
      <input
        value="${first}"
        @keyup="${ev => setFirst(ev.target.value)}"
        type="text"
        name="first"
      />

      <label for="last">Last</label>
      <input
        value="${last}"
        @keyup="${ev => setLast(ev.target.value)}"
        type="text"
        name="last"
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
