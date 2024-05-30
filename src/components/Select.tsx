import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CurrencySelect = ({
  currencies,
  onChange,
  label,
  isDisabled,
}: {
  currencies: string[];
  onChange: (value: string) => void;
  label: string;
  isDisabled: boolean;
}) =>
  currencies && (
    <Autocomplete
      sx={{ width: 300 }}
      options={currencies}
      autoHighlight
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={(e, value) => {
        value && onChange(value);
      }}
      disabled={isDisabled}
    />
  );

export default CurrencySelect;
