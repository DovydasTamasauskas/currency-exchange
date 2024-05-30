import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CurrencySelect = ({
  currencies,
  onChange,
  label,
}: {
  currencies: string[];
  onChange: (value: string) => void;
  label: string;
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
    />
  );

export default CurrencySelect;
