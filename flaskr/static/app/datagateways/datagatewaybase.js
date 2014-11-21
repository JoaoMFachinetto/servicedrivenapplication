function DatagatewayBase (http, gateway) {
    this.url = gateway + '/api/';
    this.http = http;
}

DatagatewayBase.prototype.Novo = function(Record){
    return this.http.post(this.url + 'novo', Record)
};

DatagatewayBase.prototype.BuscarTodos = function() {
    return this.http.get(this.url + 'buscartodos');
};

DatagatewayBase.prototype.BuscarPorId = function(id)
{
    return this.http.get(this.url + 'buscarporid/' + id);
};
