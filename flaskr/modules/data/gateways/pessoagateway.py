from modules.data.gateways.gatewaybase import GatewayBase
from modules.exceptions.data import RecordAlreadyExistsException, RecordNotFoundException, PasswordInvalidException

class PessoaGateway(GatewayBase):
    def __init__(self):
        GatewayBase.__init__(self, 'Pessoa')

    def register_new(self, Pessoa):
            self.add(Pessoa)

    def get_pessoa_por_nome(self, nome):
        pessoa_corrente = self.current_table.find_one({'Nome': nome})
        if pessoa_corrente is None:
            raise RecordNotFoundException()
        return pessoa_corrente
