import React, { FC } from 'react';

type ButtonProps = {
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Button</button>;
};

export default Button;
