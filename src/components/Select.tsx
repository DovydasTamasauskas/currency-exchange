import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CurrencySelect = ({
  currencies,
  onChange,
}: {
  currencies: string[];
  onChange: (value: string) => void;
}) => (
  <Autocomplete
    sx={{ width: 300 }}
    options={currencies}
    autoHighlight
    renderInput={(params) => (
      <TextField {...params} label="Choose a currency" />
    )}
    onChange={(e, value) => {
      value && onChange(value);
    }}
  />
);

export default CurrencySelect;
