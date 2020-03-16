import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "./shared-styles.js";

class testView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">Test</div>
        <h1>Test view of something I created</h1>
        <p>
          If you're reading this, Thomas is a neat guy (F*R*I*E*N*D*S reference)
        </p>
        <p>
          If you don't know what I'm talking about, it's the episode where ross
          is trapped in pauls (bruce willis) room. Also, this blurb is just for
          fun testing as I learn polymer. Cheers!
        </p>
      </div>
    `;
  }
}

window.customElements.define("test-view", testView);
