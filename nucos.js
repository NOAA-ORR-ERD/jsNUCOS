(function (root, factory) {
    if(typeof define === "function" && define.amd) {
        define([], factory);
    } else if(typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.nucos = factory();
    }
}(this, function() {
    var unitDict = {
          "Temperature":{
            "Fahrenheit":[
              [
                0.5555555555555556,
                459.66999999999996
              ],
              [
                "F",
                "degrees f",
                "degree f",
                "degrees fahrenheit",
                "deg f"
              ]
            ],
            "Kelvin":[
              [
                1.0,
                0.0
              ],
              [
                "K",
                "degrees k",
                "degree k",
                "degrees kelvin",
                "degree kelvin",
                "deg k"
              ]
            ],
            "Celsius":[
              [
                1.0,
                273.15
              ],
              [
                "C",
                "degrees c",
                "degrees celsius",
                "deg c",
                "centigrade"
              ]
            ]
          },
          "Area":{
            "square yard":[
              0.83612736,
              [
                "sq yards",
                "squareyards"
              ]
            ],
            "square foot":[
              0.09290304,
              [
                "ft^2",
                "ft\u00b2",
                "sq foot",
                "square feet"
              ]
            ],
            "square meter":[
              1.0,
              [
                "m^2",
                "m\u00b2",
                "sq m"
              ]
            ],
            "square kilometer":[
              1000000.0,
              [
                "km^2",
                "km\u00b2",
                "sq km"
              ]
            ],
            "acre":[
              4046.8564,
              [
                "acres"
              ]
            ],
            "square centimeter":[
              0.0001,
              [
                "cm^2",
                "cm\u00b2",
                "sq cm"
              ]
            ],
            "hectare":[
              10000.0,
              [
                "hectares",
                "ha"
              ]
            ],
            "square mile":[
              2589988.1,
              [
                "sq miles"
              ]
            ],
            "square inch":[
              0.00064516,
              [
                "in^2",
                "in\u00b2",
                "sq inch",
                "square inches"
              ]
            ],
            "square nautical mile":[
              3429904,
              [
                "sq nm",
                "nm^2",
                "nm\u00b2"
              ]
            ]
          },
          "Discharge":{
            "gallon per minute":[
              6.3090197e-05,
              [
                "gal/min",
                "gpm"
              ]
            ],
            "barrel per hour":[
              4.4163138888888885e-05,
              [
                "bbl/hr"
              ]
            ],
            "cubic meter per hour":[
              0.0002777777777777778,
              [
                "m^3/hr",
                "m\u00b3/hr"
              ]
            ],
            "gallon per hour":[
              1.0515032833333335e-06,
              [
                "gal/hr"
              ]
            ],
            "cubic foot per minute":[
              0.00047194744,
              [
                "ft^3/min",
                "ft\u00b3/min"
              ]
            ],
            "barrel per day":[
              1.84013078e-06,
              [
                "bbl/day"
              ]
            ],
            "cubic meter per second":[
              1.0,
              [
                "m^3/s",
                "m\u00b3/s",
                "cu m/s",
                "cms"
              ]
            ],
            "liter per second":[
              0.001,
              [
                "l/s",
                "lps"
              ]
            ],
            "liter per minute":[
              1.6666666666666667e-05,
              [
                "l/min"
              ]
            ],
            "cubic foot per second":[
              0.02831685,
              [
                "cfs",
                "cu feet/s",
                "feet^3/s",
                "ft\u00b3/s"
              ]
            ],
            "gallon per second":[
              0.0037854118,
              [
                "gal/s",
                "gal/sec"
              ]
            ],
            "gallon per day":[
              4.3812636805555563e-08,
              [
                "gal/day"
              ]
            ],
            "cubic meter per min":[
              0.016666666666666666,
              [
                "m^3/min",
                "m\u00b3/min"
              ]
            ]
          },
          "Length":{
            "latitude minute":[
              1852.0,
              [
                "latitudeminutes"
              ]
            ],
            "meter":[
              1.0,
              [
                "m",
                "meters",
                "metre"
              ]
            ],
            "millimeter":[
              0.001,
              [
                "mm",
                "millimeters"
              ]
            ],
            "mile":[
              1609.344,
              [
                "mi",
                "miles"
              ]
            ],
            "foot":[
              0.3048,
              [
                "ft",
                "feet"
              ]
            ],
            "centimeter":[
              0.01,
              [
                "cm",
                "centimeters"
              ]
            ],
            "latitude degree":[
              111120.0,
              [
                "latitudedegrees"
              ]
            ],
            "nautical mile":[
              1852.0,
              [
                "nm",
                "nauticalmiles"
              ]
            ],
            "yard":[
              0.9144,
              [
                "yrd",
                "yards"
              ]
            ],
            "fathom":[
              1.8288,
              [
                "fthm",
                "fathoms"
              ]
            ],
            "kilometer":[
              1000.0,
              [
                "km",
                "kilometers"
              ]
            ],
            "micron":[
              1e-06,
              [
                "microns"
              ]
            ],
            "inch":[
              0.0254,
              [
                "in",
                "inches"
              ]
            ]
          },
          "Mass":{
            "metric ton (tonne)":[
              1000.0,
              [
                "tonnes",
                "metric ton",
                "metric tons",
                "mt"
              ]
            ],
            "ton (UK)":[
              1016.0469,
              [
                "ukton",
                "long ton"
              ]
            ],
            "pound":[
              0.45359237,
              [
                "lb",
                "pounds",
                "lbs"
              ]
            ],
            "ton":[
              907.18474,
              [
                "tons",
                "uston"
              ]
            ],
            "gram":[
              0.001,
              [
                "g",
                "grams"
              ]
            ],
            "ounce":[
              0.028349523,
              [
                "oz",
                "ounces"
              ]
            ],
            "slug":[
              14.5939,
              [
                "slugs"
              ]
            ],
            "kilogram":[
              1.0,
              [
                "kg",
                "kilograms"
              ]
            ]
          },
          "Time":{
            "second":[
              1.0,
              [
                "s",
                "sec",
                "seconds"
              ]
            ],
            "hour":[
              3600.0,
              [
                "hr",
                "hours",
                "hrs"
              ]
            ],
            "minute":[
              60.0,
              [
                "min",
                "minutes"
              ]
            ],
            "day":[
              86400.0,
              [
                "days"
              ]
            ]
          },
          "Velocity":{
            "foot per hour":[
              8.4666e-05,
              [
                "ft/hr",
                "feet per hour",
                "feet/hour"
              ]
            ],
            "foot per minute":[
              0.00508,
              [
                "ft/min",
                "feet per minute",
                "feet/min"
              ]
            ],
            "foot per second":[
              0.3048,
              [
                "ft/s",
                "ft/sec",
                "feet per second",
                "feet/s"
              ]
            ],
            "meter per minute":[
              0.01666666666,
              [
                "m/min",
                "meters per minute"
              ]
            ],
            "meter per second":[
              1.0,
              [
                "m/s",
                "meters per second",
                "mps",
                "meter second-1",
                "meters s-1",
                "m s-1"
              ]
            ],
            "centimeter per second":[
              0.01,
              [
                "cm/s"
              ]
            ],
            "mile per hour":[
              0.44704,
              [
                "mph",
                "miles per hour"
              ]
            ],
            "knot":[
              0.514444,
              [
                "kts",
                "knots"
              ]
            ],
            "kilometer per hour":[
              0.277777,
              [
                "km/h",
                "km/hr"
              ]
            ]
          },
          "Oil Concentration":{
            "millimeter":[
              1000.0,
              [
                "mm",
                "millimeters"
              ]
            ],
            "barrel per acre":[
              39.2866176,
              [
                "bbl/acre"
              ]
            ],
            "micron":[
              1.0,
              [
                "microns"
              ]
            ],
            "barrel per square mile":[
              0.06138533995,
              [
                "bbl/sq.mile",
                "bbl/mile\u00b2"
              ]
            ],
            "inch":[
              25400.0,
              [
                "in",
                "inches"
              ]
            ],
            "liter per hectare":[
              0.1,
              [
                "liter/hectare"
              ]
            ],
            "cubic meter per square kilometer":[
              1.0,
              [
                "m^3/km^2",
                "m\u00b3/km\u00b2"
              ]
            ],
            "gallon per acre":[
              0.935395632026874,
              [
                "gal/acre"
              ]
            ]
          },
          "Density":{
            "gram per cubic centimeter":[
              1.0,
              [
                "g/cm^3",
                "g/cm\u00b3",
                "grams per cubic centimeter"
              ]
            ],
            "API degree":[
              1,
              [
                "api"
              ]
            ],
            "pound per cubic foot":[
              0.016018463,
              [
                "lbs/ft^3",
                "lb/ft\u00b3"
              ]
            ],
            "kilogram per cubic meter":[
              0.001,
              [
                "kg/m^3",
                "kg/m\u00b3"
              ]
            ],
            "specific gravity (15\u00b0C)":[
              0.99913,
              [
                "S",
                "specificgravity",
                "Spec grav",
                "SG",
                "specificgravity(15C)"
              ]
            ]
          },
          "Angular Measure":{
            "degrees":[
              0.017453292519943295,
              [
                "degree",
                "deg"
              ]
            ],
            "radians":[
              1.0,
              [
                "radian",
                "rad"
              ]
            ]
          },
          "Concentration In Water":{
            "nanogram per liter":[
              1e-09,
              [
                "ng/l"
              ]
            ],
            "pound per cubic foot":[
              16.018450433864,
              [
                "lb/ft^3",
                "lb/ft\u00b3"
              ]
            ],
            "milligram per kilogram":[
              0.001,
              [
                "mg/kg"
              ]
            ],
            "milligram per liter":[
              0.001,
              [
                "mg/l"
              ]
            ],
            "part per trillion":[
              1e-09,
              [
                "parts per trillion",
                "pptr"
              ]
            ],
            "gram per cubic meter":[
              0.001,
              [
                "g/m^3",
                "g/m\u00b3"
              ]
            ],
            "kilogram per cubic meter":[
              1.0,
              [
                "kg/m^3",
                "kg/m\u00b3"
              ]
            ],
            "microgram per liter":[
              1e-06,
              [
                "ug/l"
              ]
            ],
            "percent":[
              10.0,
              [
                "%",
                "parts per hundred",
                "per cent"
              ]
            ],
            "milligram per milliliter":[
              1.0,
              [
                "mg/ml"
              ]
            ],
            "fraction (decimal)":[
              1000.0,
              [
                "fraction",
                "mass per mass"
              ]
            ],
            "part per thousand":[
              1.0,
              [
                "ppt",
                "parts per thousand"
              ]
            ],
            "part per billion":[
              1e-06,
              [
                "ppb",
                "parts per billion"
              ]
            ],
            "part per million":[
              0.001,
              [
                "ppm",
                "parts per million"
              ]
            ]
          },
          "Volume":{
            "barrel (petroleum)":[
              0.1589873,
              [
                "bbl",
                "barrels",
                "barrel",
                "bbls"
              ]
            ],
            "liter":[
              0.001,
              [
                "l",
                "liters"
              ]
            ],
            "cubic inch":[
              1.6387064e-05,
              [
                "in^3",
                "in\u00b3",
                "cu inch",
                "cubicinches"
              ]
            ],
            "fluid ounce (UK)":[
              2.841306e-05,
              [
                "ukoz",
                "fluid oz(uk)"
              ]
            ],
            "gallon":[
              0.0037854118,
              [
                "gal",
                "gallons",
                "usgal"
              ]
            ],
            "gallon (UK)":[
              0.00454609,
              [
                "ukgal",
                "gallons(uk)"
              ]
            ],
            "cubic centimeter":[
              1e-06,
              [
                "cm^3",
                "cm\u00b3",
                "cu cm",
                "cc"
              ]
            ],
            "cubic kilometer":[
              1000000000.0,
              [
                "km^3",
                "km\u00b3",
                "cu km",
                "cubic kilometers"
              ]
            ],
            "cubic meter":[
              1.0,
              [
                "m^3",
                "m\u00b3",
                "cu m",
                "cubic meters"
              ]
            ],
            "fluid ounce":[
              2.957353e-05,
              [
                "oz",
                "ounces(fluid)",
                "fluid oz"
              ]
            ],
            "million US gallon":[
              3785.4118,
              [
                "milliongallons",
                "milgal"
              ]
            ],
            "cubic yard":[
              0.76455486,
              [
                "yd^3",
                "yd\u00b3",
                "cu yard",
                "cubicyards"
              ]
            ],
            "cubic foot":[
              0.028316847,
              [
                "ft^3",
                "ft\u00b3",
                "cu feet",
                "cubicfeet"
              ]
            ]
          },
          "Kinematic Viscosity":{
            "Stoke":     [1.0, ["St", "stokes"]],
            "centiStoke":[0.01, ["cSt", "centistokes"]],
            "square meter per second":     [10000, ["m^2/s", "m\u00b2/s"]],
            "square centimeter per second":[1.0, ["cm^2/s", "cm\u00b2/s"]],
            "square millimeter per second":[0.01, ["mm^2/s", "mm\u00b2/s"]],
            "square inch per second":      [6.4516, ["in^2/s", "in\u00b2/s", "squareinchespersecond"]],
            "Saybolt Universal Second":[1.0 / 462.0, ["SSU", "SUS"]],
            "Saybolt Furol Second":    [0.02116959064, ["SSF", "SFS"]],
          },
          "Dynamic Viscosity": {
            "kilogram per meter per second":  [1.0, ["kg/(m s)"]],
            "gram per centimeter per second": [0.1, ["g/(cm s)"]],
            "Pascal second":      [1.0, ["Pa s", "Pa.s"]],
            "milliPascal second": [0.001, ["mPa s", "mPa.s"]],
            "poise":      [0.1, ["p"]],
            "centipoise": [0.001, ["cP"]],
            "Newton seconds per square meter":    [1.0, ["N s/m^2", "N s/m\u00b2"]],
            "dyne seconds per square centimeter": [0.1, ["dyne s/cm^2", "dyne s/cm\u00b2"]],
          },

    };

    var sexagesimalPattern = {
        value: /^(-?[0-9]{1,3})\°*\s*([0-9]{1,3}(?:\.*(?:[0-9]{1,2}))?)\'*\s*(([0-9]{1,3}(\.([0-9]{1,2}))?)\"*\s*)?([NEOSW]?)$/i
    };

    /**
     * @param str String that is parsed to determine the decimal degree value
     * @return The decimal degree amount
    **/
    var sexagesimal2decimal = function(str){
        str = str.trim();
        var decimalReg = new RegExp(/^[\-]?\d*\.\d* ?[WNSE]?$/i);
        var decData = decimalReg.exec(str);
        if(decData){
            return parseFloat(str);
        }

        var regEx = new RegExp(sexagesimalPattern.value);
        var data = regEx.exec(str);
        var min = 0, sec = 0;

        if (data){
            min = parseFloat(data[2]/60);
            sec = parseFloat(data[4]/3600) || 0;
        }

        var dec;
        if (parseFloat(data[1]) > 0){
            dec = ((parseFloat(data[1]) + min + sec)).toFixed(8);
        } else {
            dec = ((parseFloat(data[1]) - min - sec)).toFixed(8);
        }
        dec = (['s', 'S', 'w', 'W'].indexOf(data[7]) !== -1) ? parseFloat(-dec) : parseFloat(dec);

        return dec;
    };

    /**
     * Method used to calculate the total duration of an in-situ burn
     *
     * @param thickness The initial thickness of the oil immediately preceding the burn in meters
     * @param waterFract The emulsion water fraction value associated with the burned oil between 0 and 1
     * @return The time duration in seconds for how long the burn will take to complete
    **/
    var _BurnDuration = function(thickness, waterFract){
        return (thickness - 0.002) / (0.000058 * (1 - waterFract));
    };

    /**
    *
    * @param str String that is manipulated
    * @return The string with the whitespace and capitalization removed
    **/
    var _Simplify = function(str){
        var string = "";
        return str.toLowerCase().split(" ").join("");
    };

    /**
    * @return a list of all the unit types available
    * a unit type is something like "mass", "velocity", etc.
    **/
    var _GetUnitTypes = function(){
        var keysArray = [];
        for (var key in unitDict){
            keysArray.push(key);
        }
        return keysArray;
    };

    /**
    * @return a list of all the units available for a given unit
    * type available
    * a unit type is something like "mass" while a unit of mass
    * would be "kilogram", "slug", etc.
    **/
    var _GetUnitNames = function(unitType){
        var namesArray = [];
        for (var key in unitDict[unitType]){
            namesArray.push(key);
        }
        return namesArray;
    };

    var _items = function(obj){
        var itemsArray = [];
        for (var key in obj){
            itemsArray.push(obj[key]);
        }
        return itemsArray;
    };

    /**
    * @return a mapping of all the unit names to the unit types
    **/
    var _FindUnitTypes = function(){
        var unitTypes = {};
        var unitKeys = _GetUnitTypes();
        for (var i = 0; i < unitKeys.length; i++){
            var unitType = unitKeys[i];
            if (unitType === "Oil Concentration" || unitType === "Concentration In Water"){
                continue;
            }
            for (var primaryName in unitDict[unitType]){
                var pname = primaryName;
                unitTypes[pname] = unitType;
                for (var key in unitDict[unitType]){
                    for (var k = 0; k < unitDict[unitType][key][1].length; k++){
                        if (unitType === "Volume" && unitDict[unitType][key][1][k] === "oz"){
                            continue;
                        }
                        unitTypes[unitDict[unitType][key][1][k]] = unitType;
                    }
                }
            }
        }
        return unitTypes;
    };

    /**
    * @param unitType the type of unit: "mass", "length", etc.
    * @param unit the unit you want the abbreviation for: "gram", etc.
    * @return the standard abbreviation for a given unit
    **/
    var _GetUnitAbbreviation = function(unitType, unit){
        return unitDict[unitType][unit][1][0];
    };

    /**
    * @param unit1 string of unit to compare
    * @param unit2 string of unit to compare
    * @return boolean showing if the units are synonyms or not
    **/
    var _isSameUnit = function(unit1, unit2){
        var allTypes = FindUnitTypes();
        var typeOne = allTypes[unit1];
        var typeTwo = allTypes[unit2];
        if (typeOne !== typeTwo){
            return false;
        } else {

        }
    };

    var ConverterClass = function(TypeName, UnitsDict){
        this.Name = TypeName;
        this.Synonyms = {};
        this.Convertdata = {};


        // loop through the UnitsDict to construct the a per term value and synomym set.
        // ['degrees', ((1.0, 273.15), ['C', 'degrees c', 'degrees celsius', 'deg c', 'centigrade'])]

        var dataDict = [];
        for (var unitTerm in UnitsDict){
            dataDict.push([unitTerm, UnitsDict[unitTerm]]);
        }

        dataDict.forEach(dataSet => {
            var [primaryName, data] = dataSet;

            var pname = _Simplify(primaryName);
            this.Convertdata[pname] = data[0];
            this.Synonyms[pname] = pname;

            data[1].forEach(synonym => {
                this.Synonyms[_Simplify(synonym)] = pname;
            });
        });

        this.Convert = function(FromUnit, ToUnit, Value){
            var fromUnit = _Simplify(FromUnit);
            var toUnit = _Simplify(ToUnit);
            var value = Value;

            toUnit = this.Synonyms[toUnit];
            fromUnit = this.Synonyms[fromUnit];
            return value * this.Convertdata[fromUnit] / this.Convertdata[toUnit];
        };
    };

    var DensityConverterClass = function(TypeName, UnitsDict){
        ConverterClass.call(this, TypeName, UnitsDict);
        this.Convert = function(FromUnit, ToUnit, Value){
            var fromUnit = _Simplify(FromUnit);
            var toUnit = _Simplify(ToUnit);
            var value = Value;
            var toVal;

            toUnit = this.Synonyms[toUnit];
            fromUnit = this.Synonyms[fromUnit];
            if (fromUnit === "apidegree"){
                value = 141.5 / (value + 131.5);
                fromUnit = "specificgravity(15\xb0c)";
            }
            if (toUnit === "apidegree"){
                toVal = 141.5 / (value * this.Convertdata[fromUnit] / this.Convertdata["specificgravity(15\xb0c)"]) - 131.5;
            } else {
                toVal = value * this.Convertdata[fromUnit] / this.Convertdata[toUnit];
            }
            return toVal;
        };
    };

    DensityConverterClass.prototype = Object.create(ConverterClass.prototype);

    DensityConverterClass.prototype.constructor = DensityConverterClass;

    var TempConverterClass = function(TypeName, UnitsDict){
        ConverterClass.call(this, TypeName, UnitsDict);
        this.Convert = function(FromUnit, ToUnit, Value){
            var fromUnit = _Simplify(FromUnit);
            var toUnit = _Simplify(ToUnit);

            fromUnit = this.Synonyms[fromUnit];
            toUnit = this.Synonyms[toUnit];

            var a1 = this.Convertdata[fromUnit][0];
            var b1 = this.Convertdata[fromUnit][1];
            var a2 = this.Convertdata[toUnit][0];
            var b2 = this.Convertdata[toUnit][1];

            var toVal = ((Value + b1) * a1 / a2) - b2;

            return toVal;
        };
    };

    TempConverterClass.prototype = Object.create(ConverterClass.prototype);

    TempConverterClass.prototype.constructor = TempConverterClass;

    // loop through the UnitsDict to construct the a per term value and synomym set.
    // ['degrees', ((1.0, 273.15), ['C', 'degrees c', 'degrees celsius', 'deg c', 'centigrade'])]
    var Converters = {};
    var dataDict = [];

    for (var unitType in unitDict){
        dataDict.push([unitType, unitDict[unitType]]);
    }

    dataDict.forEach(dataSet => {
        var [unitType, data] = dataSet;

        if (unitType.toLowerCase() === "density") {
            Converters["density"] = new DensityConverterClass(unitType, data);
        }
        else if (unitType.toLowerCase() === "temperature") {
            Converters["temperature"] = new TempConverterClass(unitType, data);
        }
        else {
            Converters[_Simplify(unitType)] = new ConverterClass(unitType, data);
        }
    });

    var convert = function(UnitType, FromUnit, ToUnit, Value){
        var unitType = _Simplify(UnitType);
        var Converter = Converters[unitType];
        return Converter.Convert(FromUnit, ToUnit, Value);
    };

    var unitMap = _FindUnitTypes();

    /**
    * class for Oil Quantity conversion -- mass to/from Volume
    * requires density info as well
    **/
    var OilQuantityConverter = function(){

        /**
        * @param fromAmount: The amount of the substance you are converting from
        * @param fromUnit: The unit of the amount you are converting from
        * @param Density: The density of the substance you are converting
        * @param DensityUnits: The units of the density the user provided
        * @param toUnit: The units the user would like to see the amount returned in
        **/
        var Convert = function(fromAmount, fromUnit, Density, DensityUnits, toUnit){
            if (unitMap[fromUnit] !== unitMap[toUnit]){
                if (unitMap[fromUnit] === "Volume" && unitMap[toUnit] === "Mass"){
                    return ToMass(fromAmount, fromUnit, Density, DensityUnits, toUnit);
                } else if (unitMap[fromUnit] === "Mass" && unitMap[toUnit] === "Volume"){
                    return ToVolume(fromAmount, fromUnit, Density, DensityUnits, toUnit);
                }
            } else {
                return convert(unitMap[fromUnit], fromUnit, toUnit, fromAmount);
            }
        };

        /**
         * @param Mass: mass you want converted to volume
         * @param MassUnits: unit of mass input
         * @param Density: density of oil
         * @param DensityUnits: units of density
         * @param VolumeUnits: units of volume desired
        **/
        var ToVolume = function(Mass, MassUnits, Density, DensityUnits, VolumeUnits){
            var density = convert("Density", DensityUnits, "kg/m^3", Density);
            var mass = convert("Mass", MassUnits, "kg", Mass);
            var volume = mass / density;
            volume = convert("Volume", "m^3", VolumeUnits, volume);
            return volume;
        };

        /**
         * @param Volume: volume you want converted to mass
         * @param VolumeUnits: units of volume input
         * @param Density: density of oil
         * @param DensityUnits: units of density
         * @param MassUnits: unit of mass desired for output
        **/
        var ToMass = function(Volume, VolUnits, Density, DensityUnits, MassUnits){
            var density = convert("Density", DensityUnits, "kg/m^3", Density);
            var volume = convert("Volume", VolUnits, "m^3", Volume);
            var mass = volume * density;
            mass = convert("Mass", "kg", MassUnits, mass);
            return mass;
        };

        return {
            Convert: Convert
        };
    };

    var waterDensity = function(){

        var calcRho = function(temp){
            var rho;
            rho = 1000 * (1.0 - (temp + 288.9414) / (508929.2 * (temp + 68.12963)) * (Math.pow(temp - 3.9863, 2)));
            return rho;
        };

        var calcRhos = function(rho, conc, temp){
            var rhos, coeffA, coeffB;
            coeffA = 0.824493 - 0.0040899 * temp + 0.000076438 * Math.pow(temp,2) - 0.00000082467 * Math.pow(temp,3) + 0.0000000053675 * Math.pow(temp,4);
            coeffB = -0.005724 + 0.00010227 * temp - 0.0000016546 * Math.pow(temp,2);
            rhos = rho + coeffA * conc + coeffB * Math.pow(conc, (3/2)) + 0.00048314 * Math.pow(conc, 2);
            return rhos;
        };

        var calcDensity = function(temp, conc){
            var rho = calcRho(temp);
            var rhos = calcRhos(rho, conc, temp);
            return rhos;
        };

        return {
            calcDensity: calcDensity
        };
    };

    var rayleighDist = function(){

        var rayleigh_sigma_from_wind = function(avg_speed){
            return Math.sqrt(2.0 / Math.PI) * avg_speed;
        };

        var rayleigh_pdf = function(x, sigma){
            var exponentForE = (-1.0 / 2.0) * (Math.pow(x, 2) / Math.pow(sigma, 2.0));
            return (x / Math.pow(sigma, 2) * Math.pow(Math.E, exponentForE));
        };

        var rayleigh_cdf = function(x, sigma){
            var exponentForE = (-1.0 / 2.0) * (Math.pow(x, 2) / Math.pow(sigma, 2.0));
            return 1.0 - Math.pow(Math.E, exponentForE);
        };

        var rayleigh_quantile = function(f, sigma){
            return (sigma * Math.sqrt((-1.0 * Math.log(Math.pow((1.0 - f), 2)))));
        };

        var rangeFinder = function(avg_speed, uncertainty){
            var sigma = rayleigh_sigma_from_wind(avg_speed);
            var low = rayleigh_quantile(0.5 - uncertainty, sigma);
            var high = rayleigh_quantile(0.5 + uncertainty, sigma);
            return {"low": low, "high": high};
        };

        return {
            rangeFinder: rangeFinder
        };

    };

    var nucos = {
        _Simplify: _Simplify,
        _GetUnitTypes: _GetUnitTypes,
        OilQuantityConverter: OilQuantityConverter,
        Converters: Converters,
        convert: convert,
        sexagesimal2decimal: sexagesimal2decimal,
        _BurnDuration: _BurnDuration,
        rayleighDist: rayleighDist,
        waterDensity: waterDensity
    };
    return nucos;
}));

