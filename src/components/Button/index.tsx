import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@mui/material";

const Button = ({
  children,
  className,
  variant,
  color,
  disabled,
  type,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <MuiButton
      className={className}
      variant={variant}
      color={color}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
