import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function CountrySelect({
  currencies,
  onChange,
}: {
  currencies: string[];
  onChange: any;
}) {
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={currencies}
      autoHighlight
      renderInput={(params) => (
        <TextField {...params} label="Choose a currency" />
      )}
      onChange={(e, value) => onChange(value)}
    />
  );
}
