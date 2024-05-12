import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_Dq9f9aBk5LBRdUaaP1oUvREjOuGwTTujTVbs6Vl5');

export const currencyCoverter = async (fromCurrency, toCurrency, units) => {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency,
    })
    const convertedCurrency = res.data[toCurrency];
    return convertedCurrency * units;
}
