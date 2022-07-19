import "components/input/input.scss";
import { ChangeEventHandler } from "react";

type EventChange = ChangeEventHandler<HTMLInputElement>;

type InputProps = {
  type: string;
  small?: boolean;
  value: number | string;
  onChange: EventChange;
};

const Input: React.FC<InputProps> = ({ type, value, small, onChange }) => {
  const smallStyle = small ? "input--small" : "";

  return (
    <input
      type={type}
      id="fname"
      name="fname"
      className={`input ${smallStyle}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
