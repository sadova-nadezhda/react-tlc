import clsx from 'clsx';
import BaseButton from './BaseButton';

const Button = ({ className, component: Component = 'button', ...props }) => {
  return (
    <BaseButton
      component={Component}
      className={clsx(
        className,
      )}
      {...props}
    />
  );
};

export default Button;
