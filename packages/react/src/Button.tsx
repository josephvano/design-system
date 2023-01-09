import { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;

  /** Sweetness */
  name: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ name, disabled, loading, color = 'primary', ...rest }, ref) => {
    return <button {...rest} ref={ref} disabled={disabled || loading} />;
  }
);

Button.displayName = 'Button';

export default Button;
