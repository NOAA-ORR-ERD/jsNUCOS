# Nucos (NOAA Unit Conversion for Oil Spills)

Used for converting temperature, volume, and mass.

## Basic Usage


### Convert when the unit types are the same:
```
nucos.convert(unitType, fromUnit, toUnit, value)
```
Example:
```
nucos.convert("Density", "API degree", "kg/m^3", 10)
```
### Convert between different quantities (volume and mass)

  Instantiate the OilQuantityConverter off of nucos
  ```
  var oilConverter = new nucos.OilQuantityConverter();
  ```
  Use the Convert method off of the OilQuantityConverter class
  ```
  oilConverter.Convert(fromAmount, fromUnit, Density, DensityUnits, toUnit);
  ```
  Example with inputs:
  ```
  oilConverter.Convert(50, "tons", 10, "API degree", "cubic meters");
  ```

## Development

nucos is written in javascript, and packages as an NPM package.

### Testing

Tests are using the mocha test framework: https://mochajs.org/

### To install mocha:

`npm i --global mocha`

Installing it globally makes the mocha command available on the command line.

### To run the tests:

`mocha tests/`

The test are in the `tests/test.js file`

See the mocha docs for how to update/write new tests.


