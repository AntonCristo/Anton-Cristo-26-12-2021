import { useAppSelector } from "src/store";

export const useIsNetworkError = () => {
  const weatherState = useAppSelector((state) => state.weatherReducer);
  const locationAutocompleteState = useAppSelector(
    (state) => state.locationSearchReducer
  );

  return weatherState.networkError || locationAutocompleteState.networkError;
};
