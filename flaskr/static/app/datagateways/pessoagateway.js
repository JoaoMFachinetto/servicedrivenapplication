function PessoaGateway (http) {
    this.GatewayBase = new DatagatewayBase(http, 'pessoa')
    this.http = http;
}

PessoaGateway.prototype.BuscarTodos = function() {
    return this.GatewayBase.BuscarTodos();
};

PessoaGateway.prototype.BuscarPorId = function(id)
{
    return this.GatewayBase.BuscarPorId(id);
};
