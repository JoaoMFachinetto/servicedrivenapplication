function WidenetCepDataproxy (http) {
    this.http = http;
}

WidenetCepDataproxy.prototype.BuscarEnderecoPeloCep = function(cep) {
    return this.http.get('http://apps.widenet.com.br/busca-cep/api/cep/' + cep + '.json');
};
