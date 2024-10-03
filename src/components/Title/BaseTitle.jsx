import React, {createElement} from 'react';

const BaseTitle = ({
  component = 'h1',
  children,
  className,
  style,
  ...props
}) => {
  return createElement(
    component,
    { className, style, ...props, dangerouslySetInnerHTML: { __html: `${children}` } }
  );
};

export default BaseTitle;
