import { useEffect, useState } from "react";
import { fetchData } from "./fetch";
import CurrencySelect from "./components/Select";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

const App = () => {
  const [supportedCurrencies, setSupportedCurrencies] = useState<string[]>([]);
  const [baseAmount, setBaseAmount] = useState<number>();
  const [baseCurrency, setBaseCurrency] = useState<string>();
  const [quoteCurrency, setQuoteCurrency] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>();

  useEffect(() => {
    fetchData(setSupportedCurrencies, `get/supported-currencies`, setIsLoading);
  }, []);

  const onSubmit = () => {
    if (baseCurrency && quoteCurrency && baseAmount && Number(baseAmount))
      fetchData(
        (quoteAmount) => {
          setResult(
            `${toCent(baseAmount)} ${baseCurrency} = 
              ${toCent(quoteAmount)} ${quoteCurrency}`
          );
        },
        `exchange?baseCurrency=${baseCurrency}&quoteCurrency=${quoteCurrency}&baseAmount=${baseAmount}`,
        setIsLoading
      );
  };

  return (
    <div className="container mt-5 overflow-hidden">
      <Container>
        <h1 className="text-center mb-4">Currency Exchange</h1>
        <div className="row gy-3">
          <div className="col-md-6 col-xs-12 d-flex justify-content-center">
            <CurrencySelect
              currencies={supportedCurrencies.filter(
                (curency) => curency !== quoteCurrency
              )}
              onChange={setBaseCurrency}
              label="BaseCurrency"
              isDisabled={isLoading}
            />
          </div>
          <div className="col-md-6 col-xs-12 d-flex justify-content-center">
            <CurrencySelect
              currencies={supportedCurrencies.filter(
                (curency) => curency !== baseCurrency
              )}
              onChange={setQuoteCurrency}
              label="QuoteCurrency"
              isDisabled={isLoading}
            />
          </div>
          <div className="col-md-6 col-xs-12 d-flex justify-content-center">
            <Input onChange={setBaseAmount} isDisabled={isLoading} />
          </div>
          <div className="col-md-6 col-xs-12 d-flex justify-content-center">
            <Button onSubmit={onSubmit} isDisabled={isLoading} />
          </div>
        </div>
        <h3 className="text-center mt-5">{result}</h3>
      </Container>
    </div>
  );
};

const toCent = (value: number) => (value / 100).toFixed(3);

export default App;
