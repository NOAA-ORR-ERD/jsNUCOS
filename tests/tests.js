var assert = require('assert');

describe('nucos', function() {
    it('should import with amd', function() {
        var requirejs = require('requirejs');
        var n_test = requirejs('/../nucos.js');
        assert.notEqual(n_test, undefined);
    });

    it('should import with commonjs', function() {
        var n_test = require('../nucos');
        assert.notEqual(n_test, undefined);
    });
});

var nucos = require('../nucos');

describe('nucos.sexagesimal2decimal', function() {

    // Bad input of various sorts
    it('Should fail with bad input', function() {
        assert.throws(() => nucos.sexagesimal2decimal("some_crap"));
    });

    it('Should fail with empty string', function() {
        assert.throws(() => nucos.sexagesimal2decimal(""));
    });

    // Bad input of various sorts
    it('Should fail with multiple decimal points', function() {
        assert.throws(() => nucos.sexagesimal2decimal("23.43.2"));
    });

    // Bad input of various sorts
    it('Should fail with decimal in more than one field', function() {
        assert.throws(() => nucos.sexagesimal2decimal("23.4 14.2"));
    });

    it('Should fail with too large values', function() {
        assert.throws(() => nucos.sexagesimal2decimal("92 92"));
    });

    it('Should fail with too large values', function() {
        assert.throws(() => nucos.sexagesimal2decimal("3° 25' 61.0\" N"));
    });

    it('should convert lat long into decimal', function() {
        var lon = "24° 43' 30.16\"";
        var lat = "58° 44' 43.97\"";

        assert.equal(nucos.sexagesimal2decimal(lon), 24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), 58.74554722);
    });

    it('should convert lat long into decimal w/o fancy characters', function() {
        var lon = "24 43 30.16";
        var lat = "58 44 43.97";

        assert.equal(nucos.sexagesimal2decimal(lon), 24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), 58.74554722);
    });

    it('should understand negative degrees minutes seconds ', function() {
        var lon = "24 43 30.16";
        var lat = "-58 44 43.97";

        assert.equal(nucos.sexagesimal2decimal(lon), 24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), -58.74554722);
    });

    it('should convert to a negative w/ W and S', function() {
        var lon = "24° 43' 30.16\"W";
        var lat = "58° 44' 43.97\"S";

        assert.equal(nucos.sexagesimal2decimal(lon), -24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), -58.74554722);
    });

    it('should convert to a negative w/ West and South', function() {
        var lon = "24° 43' 30.16\"  West";
        var lat = "58° 44' 43.97\"south";

        assert.equal(nucos.sexagesimal2decimal(lon), -24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), -58.74554722);
    });

    it('should convert with a leading zero', function() {
        var lon = "024° 43' 30.16\"w";
        var lat = "058° 44' 43.97\"s";

        assert.equal(nucos.sexagesimal2decimal(lon), -24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), -58.74554722);
    });

    it('should convert with space between - and number', function() {
        var lon = "- 024° 43' 30.16\"w";
        var lat = "  -  58.74554722  ";

        assert.equal(nucos.sexagesimal2decimal(lon), -24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), -58.74554722);
    });

    it('should convert with minus as separator', function() {
        var lon = "24-43-30.16\"w";
        var lat = "-58 - 44 - 43.97";

        assert.equal(nucos.sexagesimal2decimal(lon), -24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), -58.74554722);
    });

    it('should convert with verbose and letters', function() {
        var lon = "15d 55m 20s south";
        var lat = "15° 55′ 20\" north";

        assert.equal(nucos.sexagesimal2decimal(lon), -15.92222222);
        assert.equal(nucos.sexagesimal2decimal(lat), 15.92222222);
    });

    it('should convert to a negative w/ w and s', function() {
        var lon = "24° 43' 30.16\"w";
        var lat = "58° 44' 43.97\"s";

        assert.equal(nucos.sexagesimal2decimal(lon), -24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), -58.74554722);
    });

    it('should convert with fancy characters, degrees, and decimal', function() {
        var lon = "42° 20.45' N";
        assert.equal(nucos.sexagesimal2decimal(lon), 42.34083333);
    });

    it('should convert degress w/ decimal minutes', function() {
        var lon = "24 43.16";
        var lat = "58 44.43";

        assert.equal(nucos.sexagesimal2decimal(lon), 24.71933333);
        assert.equal(nucos.sexagesimal2decimal(lat), 58.7405);
    });

    it('should convert degrees w/ just degree minutes, no decimal', function() {
        var lon = "24 43";
        var lat = "58 44";

        assert.equal(nucos.sexagesimal2decimal(lon), 24.71666667);
        assert.equal(nucos.sexagesimal2decimal(lat), 58.73333333);
    });

    it('should leave decimals alone', function() {
        var lon = "43.23423";
        var lat = "-124.2334";

        assert.equal(nucos.sexagesimal2decimal(lon), 43.23423);
        assert.equal(nucos.sexagesimal2decimal(lat), -124.2334);
    });

    it('should sanitize leading and trailing spaces', function() {
        var lon = " 43.23423 ";
        var lat = " -124.2334 ";

        assert.equal(nucos.sexagesimal2decimal(lon), 43.23423);
        assert.equal(nucos.sexagesimal2decimal(lat), -124.2334);
    });

    it('should not choke on cardinal directions with a decimal', function() {
        var lon = "43.23423 N";
        var lat = "-124.2334 W";

        assert.equal(nucos.sexagesimal2decimal(lon), 43.23423);
        assert.equal(nucos.sexagesimal2decimal(lat), -124.2334);
    });

    it('should handle deg, min, sec with North and south', function() {
        var lon = "24° 43' 30.16 West";
        var lat = "58° 44' 43.97south";

        assert.equal(nucos.sexagesimal2decimal(lon), -24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), -58.74554722);
    // Additional tests from the Python version

    });
});

describe('nucos.convert', function() {
    it('should convert same unit density', function() {
        assert.equal(nucos.convert("Density", "API degree", "kg/m^3", 10), 999.016);
    });

    it('should parse unicode exponents', function() {
        assert.equal(nucos.convert('Density', 'API degree', 'kg/m³', 10), 999.016);
    });

    it('should convert Concentration', function() {
        assert.equal(nucos.convert('Concentration', 'ppm', 'fraction', 1.0), 1e-6);
    });

    it('should convert Interfacial Tension', function() {
        assert.equal(nucos.convert('InterfacialTension', 'N/m', 'dyn/cm', 1.0), 1e3);
    });

});

describe('nucos.OilQuantityConverter', function() {
    it('should convert oil quantity between volume and mass', function() {
        var oc = new nucos.OilQuantityConverter();
        assert.equal(oc.Convert(50, "tons", 10, "API degree", "cubic meters"), 45.4039144518206);
    });


});

describe('nucos.GetAbbreviation', function() {
    [
        ['kilogram', 'kg'],
        ['barrel (petroleum)', 'bbl'],
        ['milligram', 'mg'],
        ['microgram', 'µg'],
        ['ton (UK)', 'ukton'],
        ['m^3', 'm\u00b3'],
        ['bar', 'bar'],  // this one has no synonyms
    ].forEach(([unit, abbv]) => {
        it(`nucos.GetAbbreviation("${unit}") should return "${abbv}"`, function() {
            assert.equal(nucos.GetAbbreviation(unit), abbv);
        });
    });
});
