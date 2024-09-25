import { createElement } from 'react';

const BaseButton = ({
  component = 'button',
  children,
  className,
  style,
  ...props
}) => {
  return createElement(component, { className, style, ...props }, children);
};

export default BaseButton;
