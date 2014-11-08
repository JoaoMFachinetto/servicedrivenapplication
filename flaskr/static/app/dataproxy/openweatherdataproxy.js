function OpenWeatherDataproxy (http) {
    this.http = http;
}

OpenWeatherDataproxy.prototype.BuscarClimaPorCep = function(cep) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cep + '&units=metric&cnt=5&lang=pt');
};

OpenWeatherDataproxy.prototype.BuscarClimaPorGeoPosicao = function(latitude, longitude) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + latitude + '&lon=' + longitude + '&cnt=5&lang=pt&mode=json');
};
