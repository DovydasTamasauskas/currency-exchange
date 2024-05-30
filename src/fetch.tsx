import { BASE_URL } from "./components/urls";

export const fetchData = (onSucces: (data: any) => void, params: string): any =>
  fetch(`${BASE_URL}/${params}`)
    .then((res) => res.json())
    .then((res) => res?.result)
    .then(onSucces)
    .catch((error) => {
      console.log(error);
      return null;
    });
