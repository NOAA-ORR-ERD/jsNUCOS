var requirejs = require('requirejs');
var assert = require('assert');
nucos = requirejs('/../nucos.js');


describe('sexagesimal2decimal', function(){
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
