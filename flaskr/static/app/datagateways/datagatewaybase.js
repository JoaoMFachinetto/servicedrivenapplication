function DatagatewayBase (http, url) {
    this.url = 'api/' + url;
    this.http = http;
}

DatagatewayBase.prototype.BuscarTodos = function() {
    return this.http.get(this.url + '/buscartodos');
};

DatagatewayBase.prototype.BuscarPorId = function(id)
{
    return this.http.get(this.url + '/buscarporid/' + id);
};
