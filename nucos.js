function Nucos() {
    var unitDict = {
        "Temperature": {
            "Fahrenheit": [
                [
                    0.5555555555555556,
                    459.68800000000005
                ],
                [
                    "F",
                    "degrees f",
                    "degree f",
                    "degrees fahrenheit",
                    "deg f"
                ]
            ],
            "Kelvin": [
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
            "Celsius": [
                [
                    1.0,
                    273.16
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
        "Area": {
            "square yard": [
                0.83612736,
                [
                    "sq yards",
                    "squareyards"
                ]
            ],
            "square foot": [
                0.09290304,
                [
                    "ft^2",
                    "sq foot",
                    "square feet"
                ]
            ],
            "square meter": [
                1.0,
                [
                    "m^2",
                    "sq m"
                ]
            ],
            "square kilometer": [
                1000000.0,
                [
                    "km^2",
                    "sq km"
                ]
            ],
            "acre": [
                4046.8564,
                [
                    "acres"
                ]
            ],
            "square centimeter": [
                0.0001,
                [
                    "cm^2",
                    "sq cm"
                ]
            ],
            "hectare": [
                10000.0,
                [
                    "hectares",
                    "ha"
                ]
            ],
            "square mile": [
                2589988.1,
                [
                    "sq miles"
                ]
            ],
            "square inch": [
                0.00064516,
                [
                    "in^2",
                    "sq inch",
                    "square inches"
                ]
            ],
            "square nautical mile": [
                3429904,
                [
                    "sq nm",
                    "nm^2"
                ]
            ]
        },
        "Discharge": {
            "gallon per minute": [
                6.3090197e-05,
                [
                    "gal/min",
                    "gpm"
                ]
            ],
            "barrel per hour": [
                4.4163138888888885e-05,
                [
                    "bbl/hr"
                ]
            ],
            "cubic meter per hour": [
                0.0002777777777777778,
                [
                    "m^3/hr"
                ]
            ],
            "gallon per hour": [
                1.0515032833333335e-06,
                [
                    "gal/hr"
                ]
            ],
            "cubic foot per minute": [
                0.00047194744,
                [
                    "ft^3/min"
                ]
            ],
            "barrel per day": [
                1.84013078e-06,
                [
                    "bbl/day"
                ]
            ],
            "cubic meter per second": [
                1.0,
                [
                    "m^3/s",
                    "cu m/s",
                    "cms"
                ]
            ],
            "liter per second": [
                0.001,
                [
                    "l/s",
                    "lps"
                ]
            ],
            "liter per minute": [
                1.6666666666666667e-05,
                [
                    "l/min"
                ]
            ],
            "cubic foot per second": [
                0.02831685,
                [
                    "cfs",
                    "cu feet/s",
                    "feet^3/s"
                ]
            ],
            "gallon per second": [
                0.0037854118,
                [
                    "gal/s",
                    "gal/sec"
                ]
            ],
            "gallon per day": [
                4.3812636805555563e-08,
                [
                    "gal/day"
                ]
            ],
            "cubic meter per min": [
                0.016666666666666666,
                [
                    "m^3/min"
                ]
            ]
        },
        "Length": {
            "latitude minute": [
                1852.0,
                [
                    "latitudeminutes"
                ]
            ],
            "meter": [
                1.0,
                [
                    "m",
                    "meters",
                    "metre"
                ]
            ],
            "millimeter": [
                0.001,
                [
                    "mm",
                    "millimeters"
                ]
            ],
            "mile": [
                1609.344,
                [
                    "mi",
                    "miles"
                ]
            ],
            "foot": [
                0.3048,
                [
                    "ft",
                    "feet"
                ]
            ],
            "centimeter": [
                0.01,
                [
                    "cm",
                    "centimeters"
                ]
            ],
            "latitude degree": [
                111120.0,
                [
                    "latitudedegrees"
                ]
            ],
            "nautical mile": [
                1852.0,
                [
                    "nm",
                    "nauticalmiles"
                ]
            ],
            "yard": [
                0.9144,
                [
                    "yrd",
                    "yards"
                ]
            ],
            "fathom": [
                1.8288,
                [
                    "fthm",
                    "fathoms"
                ]
            ],
            "kilometer": [
                1000.0,
                [
                    "km",
                    "kilometers"
                ]
            ],
            "micron": [
                1e-06,
                [
                    "microns"
                ]
            ],
            "inch": [
                0.0254,
                [
                    "in",
                    "inches"
                ]
            ]
        },
        "Mass": {
            "metric ton (tonne)": [
                1000.0,
                [
                    "tonnes",
                    "metric ton",
                    "metric tons"
                ]
            ],
            "ton (UK)": [
                1016.0469,
                [
                    "ukton",
                    "long ton"
                ]
            ],
            "pound": [
                0.45359237,
                [
                    "lb",
                    "pounds",
                    "lbs"
                ]
            ],
            "ton": [
                907.18474,
                [
                    "tons",
                    "uston"
                ]
            ],
            "gram": [
                0.001,
                [
                    "g",
                    "grams"
                ]
            ],
            "ounce": [
                0.028349523,
                [
                    "oz",
                    "ounces"
                ]
            ],
            "slug": [
                14.5939,
                [
                    "slugs"
                ]
            ],
            "kilogram": [
                1.0,
                [
                    "kg",
                    "kilograms"
                ]
            ]
        },
        "Time": {
            "second": [
                1.0,
                [
                    "s",
                    "sec",
                    "seconds"
                ]
            ],
            "hour": [
                3600.0,
                [
                    "hr",
                    "hours",
                    "hrs"
                ]
            ],
            "minute": [
                60.0,
                [
                    "min",
                    "minutes"
                ]
            ],
            "day": [
                86400.0,
                [
                    "days"
                ]
            ]
        },
        "Velocity": {
            "foot per hour": [
                8.4666e-05,
                [
                    "ft/hr",
                    "feet per hour",
                    "feet/hour"
                ]
            ],
            "foot per minute": [
                0.00508,
                [
                    "ft/min",
                    "feet per minute",
                    "feet/min"
                ]
            ],
            "foot per second": [
                0.3048,
                [
                    "ft/s",
                    "ft/sec",
                    "feet per second",
                    "feet/s"
                ]
            ],
            "meter per minute": [
                0.01666666666,
                [
                    "m/min",
                    "meters per minute"
                ]
            ],
            "meter per second": [
                1.0,
                [
                    "m/s",
                    "meters per second",
                    "mps"
                ]
            ],
            "centimeter per second": [
                0.01,
                [
                    "cm/s"
                ]
            ],
            "mile per hour": [
                0.44704,
                [
                    "mph",
                    "miles per hour"
                ]
            ],
            "knot": [
                0.514444,
                [
                    "kts",
                    "knots"
                ]
            ],
            "kilometer per hour": [
                0.277777,
                [
                    "km/h",
                    "km/hr"
                ]
            ]
        },
        "Oil Concentration": {
            "millimeter": [
                1000.0,
                [
                    "mm",
                    "millimeters"
                ]
            ],
            "barrel per acre": [
                39.2866176,
                [
                    "bbl/acre"
                ]
            ],
            "micron": [
                1.0,
                [
                    "microns"
                ]
            ],
            "barrel per square mile": [
                0.06138533995,
                [
                    "bbl/sq.mile"
                ]
            ],
            "inch": [
                25400.0,
                [
                    "in",
                    "inches"
                ]
            ],
            "liter per hectare": [
                0.1,
                [
                    "liter/hectare"
                ]
            ],
            "cubic meter per square kilometer": [
                1.0,
                [
                    "m^3/km^2"
                ]
            ],
            "gallon per acre": [
                0.935395632026874,
                [
                    "gal/acre"
                ]
            ]
        },
        "Density": {
            "gram per cubic centimeter": [
                1.0,
                [
                    "g/cm^3",
                    "grams per cubic centimeter"
                ]
            ],
            "API degree": [
                1,
                [
                    "api"
                ]
            ],
            "pound per cubic foot": [
                0.016018463,
                [
                    "lbs/ft^3"
                ]
            ],
            "kilogram per cubic meter": [
                0.001,
                [
                    "kg/m^3"
                ]
            ],
            "specific gravity (15\u00b0C)": [
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
        "Concentration In Water": {
            "nanogram per liter": [
                1e-06,
                []
            ],
            "pound per cubic foot": [
                16018.463,
                [
                    "lb/ft^3"
                ]
            ],
            "milligram per kilogram": [
                1.0,
                [
                    "mg/kg"
                ]
            ],
            "milligram per liter": [
                1.0,
                [
                    "mg/l"
                ]
            ],
            "part per trillion": [
                1e-06,
                [
                    "parts per trillion",
                    "pptr"
                ]
            ],
            "kilogram per cubic meter": [
                1000,
                [
                    "kg/m^3",
                    "kg/m3"
                ]
            ],
            "microgram per liter": [
                0.001,
                [
                    "ug/l"
                ]
            ],
            "percent": [
                10000.0,
                [
                    "%",
                    "parts per hundred",
                    "per cent"
                ]
            ],
            "milligram per milliliter": [
                1000,
                [
                    "mg/ml"
                ]
            ],
            "fraction (decimal)": [
                1000000.0,
                [
                    "fraction",
                    "mass per mass"
                ]
            ],
            "part per thousand": [
                1000,
                [
                    "ppt",
                    "parts per thousand"
                ]
            ],
            "part per billion": [
                0.001,
                [
                    "ppb",
                    "parts per billion"
                ]
            ],
            "part per million": [
                1.0,
                [
                    "ppm",
                    "parts per million"
                ]
            ]
        },
        "Volume": {
            "barrel (petroleum)": [
                0.1589873,
                [
                    "bbl",
                    "barrels",
                    "barrel",
                    "bbls"
                ]
            ],
            "liter": [
                0.001,
                [
                    "l",
                    "liters"
                ]
            ],
            "cubic inch": [
                1.6387064e-05,
                [
                    "in^3",
                    "cu inch",
                    "cubicinches"
                ]
            ],
            "fluid ounce (UK)": [
                2.841306e-05,
                [
                    "ukoz",
                    "fluid oz(uk)"
                ]
            ],
            "gallon": [
                0.0037854118,
                [
                    "gal",
                    "gallons",
                    "usgal"
                ]
            ],
            "gallon (UK)": [
                0.00454609,
                [
                    "ukgal",
                    "gallons(uk)"
                ]
            ],
            "cubic centimeter": [
                1e-06,
                [
                    "cm^3",
                    "cu cm",
                    "cc"
                ]
            ],
            "cubic kilometer": [
                1000000000.0,
                [
                    "km^3",
                    "cu km",
                    "cubic kilometers"
                ]
            ],
            "cubic meter": [
                1.0,
                [
                    "m^3",
                    "cu m",
                    "cubic meters"
                ]
            ],
            "fluid ounce": [
                2.957353e-05,
                [
                    "oz",
                    "ounces(fluid)",
                    "fluid oz"
                ]
            ],
            "million US gallon": [
                3785.4118,
                [
                    "milliongallons",
                    "milgal"
                ]
            ],
            "cubic yard": [
                0.76455486,
                [
                    "yd^3",
                    "cu yard",
                    "cubicyards"
                ]
            ],
            "cubic foot": [
                0.028316847,
                [
                    "ft^3",
                    "cu feet",
                    "cubicfeet"
                ]
            ]
        },
        "Kinematic Viscosity": {
            "square meter per second": [
                10000,
                [
                    "m^2/s"
                ]
            ],
            "square inch per second": [
                6.4516,
                [
                    "in^2/s",
                    "squareinchespersecond"
                ]
            ],
            "Saybolt Universal Second": [
                0.0021645021645021645,
                [
                    "SSU",
                    "SUS"
                ]
            ],
            "square centimeter per second": [
                1.0,
                [
                    "cm^2/s"
                ]
            ],
            "Stoke": [
                1.0,
                [
                    "St",
                    "stokes"
                ]
            ],
            "Saybolt Furol Second": [
                0.02116959064,
                [
                    "SSF",
                    "SFS"
                ]
            ],
            "centiStoke": [
                0.01,
                [
                    "cSt",
                    "centistokes"
                ]
            ],
            "square millimeter per second": [
                0.01,
                [
                    "mm^2/s"
                ]
            ]
        }
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
        // ['degrees', ((1.0, 273.16), ['C', 'degrees c', 'degrees celsius', 'deg c', 'centigrade'])]
        
        var dataDict = [];
        for (var unitType in UnitsDict){
            for(var unitTerm in UnitsDict[unitType]){
                dataDict.push([unitTerm, UnitsDict[unitType][unitTerm]]);
            }
        }

        for(var dataset in dataDict){
            var primaryName = dataDict[dataset][0];
            var data = dataDict[dataset][1];
        
            var pname = _Simplify(primaryName);
            this.Convertdata[pname] = data[0];
            this.Synonyms[pname] = pname;
        
            for (var synonym in data[1]){
                this.Synonyms[_Simplify(data[1][synonym])] = pname;
            }
        }
        
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
    };

    DensityConverterClass.prototype = Object.create(ConverterClass.prototype);

    DensityConverterClass.prototype.constructor = DensityConverterClass;

    DensityConverterClass.prototype.Convert = function(FromUnit, ToUnit, Value){
        var fromUnit = _Simplify(FromUnit);
        var toUnit = _Simplify(ToUnit);
        var value = Value;
        var toVal;

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

    // loop through the UnitsDict to construct the a per term value and synomym set.
    // ['degrees', ((1.0, 273.16), ['C', 'degrees c', 'degrees celsius', 'deg c', 'centigrade'])]
    var Converters = {};

    for (var unitType in unitDict){
        for(var unitTerm in unitDict[unitType]){
            var dataDict = [];
            dataDict.push([unitTerm, unitDict[unitType][unitTerm]]);
        }
        if (unitType.toLowerCase() === "density"){
            Converters["density"] = new DensityConverterClass(unitType, dataDict);
        } else {
            Converters[_Simplify(unitType)] = new ConverterClass(unitType, dataDict);
        }
    }
    // for(var dataset in dataDict){
    //     var primaryName = dataDict[dataset][0];
    //     var data = dataDict[dataset][1];
        
    // }

    var convert = function(UnitType, FromUnit, ToUnit, Value){
        var unitType = _Simplify(UnitType);
        var Converter = Converters[unitType];
        return Converter.Convert(FromUnit, ToUnit, Value);
    };

    /**
    * class for Oil Quantity conversion -- mass to/from Volume
    * requires density info as well
    **/
    var OilQuantityConverter = function(){

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
            ToVolume: ToVolume,
            ToMass: ToMass
        };
    };

    return {
        _Simplify: _Simplify,
        _GetUnitTypes: _GetUnitTypes,
        OilQuantityConverter: OilQuantityConverter,
        convert: convert,
        DensityConverterClass: DensityConverterClass
    };
}

var moo = new Nucos();

OilConverter = new moo.OilQuantityConverter();
var densityConverter = new moo.DensityConverterClass();
console.log(densityConverter);
// console.log('Volume Test: ' + moo.convert('Volume', 'gal', 'cubic meter', 200));
console.log(moo.convert("Density", "api", "kg/m^3", 10));
console.log(OilConverter.ToVolume(50, "ton", 10, "API degree", "cubic meter"));






