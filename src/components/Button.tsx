import Button from "@mui/material/Button";

const Input = ({ onSubmit }: { onSubmit: () => void }) => (
  <Button variant="contained" sx={{ width: 300 }} onClick={onSubmit}>
    Calculate
  </Button>
);

export default Input;
