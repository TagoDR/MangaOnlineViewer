import { html } from 'lit-html';
import { IconCheck, IconX } from '../icons';

function toggler(name: string, checked = false, event?: (e: Event) => void) {
  return html`
    <div class="toggler">
      <input
        id="${name}"
        name="${name}"
        type="checkbox"
        value="true"
        ?checked="${checked}"
        @change=${event}
      />
      <label for="${name}"> ${IconCheck} ${IconX} </label>
    </div>
  `;
}

export default toggler;
