import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

const Input = ({
  name,
  placeholder,
  value,
  className,
  variant,
  color,
  onChange,
}: TextFieldProps) => {
  return (
    <TextField
      className={className}
      variant={variant}
      color={color}
      placeholder={placeholder}
    />
  );
};

export default Input;
