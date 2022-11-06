import { MouseEventHandler } from "react";

export type ButtonProps = {
  children: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick ? props.onClick : () => {}}
      className="rounded-sm bg-gray-900 px-3 py-2 text-xs text-white hover:bg-gray-700"
    >
      {props.children}
    </button>
  );
};

export default Button;
