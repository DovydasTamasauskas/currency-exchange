import TextField from "@mui/material/TextField";

const Input = ({
  onChange,
  isDisabled,
}: {
  onChange: (value: number) => void;
  isDisabled: boolean;
}) => (
  <TextField
    id="outlined-basic"
    sx={{ width: 300 }}
    label="Amount"
    variant="outlined"
    onChange={(e) => e?.target?.value && onChange(Number(e.target.value))}
    disabled={isDisabled}
  />
);

export default Input;
