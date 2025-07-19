<script lang="ts">
import { IconCheck, IconX } from '../ui/icons';

interface Props {
  name: string;
  checked?: boolean;
  onchange?: (e: Event) => void;
}

let { name, checked = false, onchange }: Props = $props();
</script>

<div class="toggler">
  <input
    {checked}
    id={name}
    {name}
    {onchange}
    type="checkbox"
    value="true"
  />
  <label for={name}>
    {@html IconCheck}
    {@html IconX}
  </label>
</div>
