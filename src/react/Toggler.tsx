import { IconCheck, IconX } from './Icons.ts';

type Props = {
  name: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

function Toggler({ name, checked = false, onChange }: Props) {
  return (
    <div className="toggler">
      <input
        id={name}
        name={name}
        type="checkbox"
        value="true"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>
        <IconCheck />
        <IconX />
      </label>
    </div>
  );
}

export default Toggler;
