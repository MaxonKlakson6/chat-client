import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@mui/material";

const Button = ({
  children,
  className,
  variant,
  color,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <MuiButton
      className={className}
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
