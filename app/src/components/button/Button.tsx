import React from "react";

import "components/button/button.scss";

type ButtonProps = {
  inverted?: boolean;
  selected?: boolean;
  children: JSX.Element | string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  inverted,
  selected,
  children,
}) => {
  const invertedStyle = inverted ? "button--inverted" : "";
  const selectedStyle = selected ? "button--selected" : "";

  return (
    <button
      data-testid="button"
      className={`button ${invertedStyle} ${selectedStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
