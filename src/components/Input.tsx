import TextField from "@mui/material/TextField";

const Input = ({ onChange }: { onChange: (value: number) => void }) => (
  <TextField
    id="outlined-basic"
    sx={{ width: 300 }}
    label="Amount"
    variant="outlined"
    onChange={(e) => e?.target?.value && onChange(Number(e.target.value))}
  />
);

export default Input;
