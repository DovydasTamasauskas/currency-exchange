import { BASE_URL } from "./const/urls";

export const fetchData = (
  onSucces: (data: any) => void,
  params: string,
  setIsLoading: (data: boolean) => void
): any => {
  setIsLoading(true);
  return fetch(`${BASE_URL}/${params}`)
    .then((res) => res.json())
    .then((res) => res?.result)
    .then(onSucces)
    .then(() => setIsLoading(false))
    .catch((error) => {
      console.log(error);
      return null;
    });
};
