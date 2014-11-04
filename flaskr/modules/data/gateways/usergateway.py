from modules.data.gateways.gatewaybase import GatewayBase
from modules.exceptions.data import RecordAlreadyExistsException, RecordNotFoundException, PasswordInvalidException

class UserGateway(GatewayBase):
    def __init__(self):
        GatewayBase.__init__(self, 'Users')

    def register_new(self, username, password):
        user = self.current_table.find_one({'username': username})
        if user is None:
            self.add({'username': username, 'password': password})
        else:
            raise RecordAlreadyExistsException(user)

    def get_user(self, user_name):
        current_user = self.current_table.find_one({'username': user_name})
        if current_user is None:
            raise RecordNotFoundException()
        return current_user

    def set_developer(self, user_id):
        current_user = self.get_by_id(user_id)
        if current_user is None:
            raise RecordNotFoundException()
        current_user['is_developer'] = True
        self.add(current_user)
