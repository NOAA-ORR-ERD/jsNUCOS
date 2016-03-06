var assert = require('assert');

describe('nucos', function(){
    it('should import with amd', function(){
        var requirejs = require('requirejs');
        var n_test = requirejs('/../nucos.js');
        assert.notEqual(n_test, undefined);
    });

    it('should import with commonjs', function(){
        var n_test = require('../nucos');
        assert.notEqual(n_test, undefined);
    });
});

var nucos = require('../nucos');
describe('nucos.sexagesimal2decimal', function(){
    it('should convert lat long into decimal', function(){
        var lon = "24° 43' 30.16\"";
        var lat = "58° 44' 43.97\"";

        assert.equal(nucos.sexagesimal2decimal(lon), 24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), 58.74554722);
    });

    it('should convert lat long into decimal w/o fancy characters', function(){
        var lon = "24 43 30.16";
        var lat = "58 44 43.97";

        assert.equal(nucos.sexagesimal2decimal(lon), 24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), 58.74554722);
    });

    it('should convert to a negative w/ W and S', function(){
        var lon = "24° 43' 30.16\"W";
        var lat = "58° 44' 43.97\"S";

        assert.equal(nucos.sexagesimal2decimal(lon), -24.72504444);
        assert.equal(nucos.sexagesimal2decimal(lat), -58.74554722);
    });
});

describe('nucos.convert', function(){
    it('should convert same unit density', function(){
        assert.equal(nucos.convert("Density", "API degree", "kg/m^3", 10), 999.13);
    });
});

describe('nocos.OilQuantityConverter', function(){
    it('should convert oil quantity between volume and mass', function(){
        var oc = new nucos.OilQuantityConverter();
        assert.equal(oc.Convert(50, "tons", 10, "API degree", "cubic meters"), 45.39873389849169);
    });
});
