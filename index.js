import { countries } from "countries-list"

const reducedCountriesList = Object.keys(countries).map(code => countries[code].name)

export default reducedCountriesList