function GeoIpDataproxy (http) {
    this.http = http;
}

GeoIpDataproxy.prototype.BuscarDadosDoIp = function() {
    return this.http.get('http://www.telize.com/geoip');
};
