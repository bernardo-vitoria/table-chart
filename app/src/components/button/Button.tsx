import React from "react";

import "components/button/button.scss";

type ButtonProps = {
  inverted?: boolean;
  children: JSX.Element | string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ onClick, inverted, children }) => {
  const invertedStyle = inverted ? "button--inverted" : "";

  return (
    <button
      data-testid="button"
      className={`button ${invertedStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
