import { BASE_URL } from "./components/urls";

export const fetchData = (onSucces: (data: any) => void, params: string): any =>
  fetch(`${BASE_URL}/exchange?${params}`)
    .then((res) => res.json())
    .then(onSucces);
