import { useEffect, useState } from "react";
import { fetchData } from "./fetch";
import CurrencySelect from "./components/CurrencySelect";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";

const App = () => {
  const [rates, setRates] = useState({});
  const [supportedCurrencies, setSupportedCurrencies] = useState<string[]>([]);
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("");
  const [quoteCurrency, setQuoteCurrency] = useState("");

  useEffect(() => {
    fetchData((data: any) => {
      if (data) setSupportedCurrencies(data.currencies);
    }, `get/supported-currencies`);
    fetchData((data: any) => {
      if (data) setRates(data);
    }, `exchange?baseCurrency=${baseCurrency}&quoteCurrency=${quoteCurrency}&baseAmount=${amount}`);
  }, [amount, baseCurrency, quoteCurrency]);

  console.log(rates, supportedCurrencies, baseCurrency, quoteCurrency, amount);

  return (
    <>
      <div className="container mt-5 overflow-hidden">
        <h1 className="text-center mb-4">Currency Exchange</h1>
        <div className="row gy-3">
          <div className="col-6 d-flex justify-content-center">
            <CurrencySelect
              currencies={supportedCurrencies}
              onChange={setBaseCurrency}
            />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <CurrencySelect
              currencies={supportedCurrencies}
              onChange={setQuoteCurrency}
            />
          </div>

          <div className="col-6 d-flex justify-content-center">
            <TextField
              id="outlined-basic"
              sx={{ width: 300 }}
              label="Amount"
              variant="outlined"
              onChange={(e) =>
                e?.target?.value && setAmount(Number(e.target.value))
              }
            />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Button
              variant="contained"
              sx={{ width: 300 }}
              onClick={() => {
                console.log("submit");
              }}
            >
              Calculate
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
