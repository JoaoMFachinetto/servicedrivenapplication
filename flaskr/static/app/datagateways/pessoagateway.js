function PessoaGateway (http) {
    this.base = new DatagatewayBase(http, 'pessoa')
    this.http = http;
}

PessoaGateway.prototype.BuscarTodos = function() {
    return this.base.BuscarTodos();
};

PessoaGateway.prototype.BuscarPorId = function(id)
{
    return this.base.BuscarPorId(id);
};

PessoaGateway.prototype.Novo = function(Record){
    return this.base.Novo(Record);
};
