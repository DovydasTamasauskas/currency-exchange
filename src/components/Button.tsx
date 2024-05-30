import Button from "@mui/material/Button";

const Input = ({
  onSubmit,
  isDisabled,
}: {
  onSubmit: () => void;
  isDisabled: boolean;
}) => (
  <Button
    variant="contained"
    sx={{ width: 300 }}
    onClick={onSubmit}
    disabled={isDisabled}
  >
    Calculate
  </Button>
);

export default Input;
