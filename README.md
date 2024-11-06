# reduced-countries-list
This package provides a countries-list where ONLY return their names in JSON format. NOT return data of country code, prefix phone, capital, etc.

the purpose of this package is only provide the names of countries in English language, later the option to use the list in Spanish will be added

## Installation
```
npm install reduced-countries-list
```

## Usage
This is a simple method of use the package:

```
import reducedCountriesList from "reduced-countries-list"

//Example
for (const country of reducedCountriesList) {
    console.log(country)
}

```
