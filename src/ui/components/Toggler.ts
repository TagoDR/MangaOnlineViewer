import { html } from '../../utils/code-tag.ts';
import { IconCheck, IconX } from '../icons';

function toggler(name: string, checked: boolean = false) {
  return html`
    <div class="toggler">
      <input id="${name}" name="${name}" type="checkbox" value="true" ${checked ? 'checked' : ''} />
      <label for="${name}"> ${IconCheck} ${IconX} </label>
    </div>
  `;
}

export default toggler;
