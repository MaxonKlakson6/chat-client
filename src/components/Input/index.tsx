import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

const Input = ({
  name,
  placeholder,
  value,
  className,
  variant,
  fullWidth,
  color,
  onChange,
}: TextFieldProps): JSX.Element => {
  return (
    <TextField
      className={className}
      variant={variant}
      fullWidth={fullWidth}
      color={color}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
