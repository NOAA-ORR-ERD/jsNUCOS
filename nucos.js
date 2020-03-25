(function (root, factory) {
    if(typeof define === "function" && define.amd) {
        define(['json!./nucos/unit_data.json'], factory);
    } else if(typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.nucos = factory();
    }
}(this, function(unitDict) {
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

