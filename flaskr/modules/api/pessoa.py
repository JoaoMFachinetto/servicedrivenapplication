from flask import Blueprint, request, g, Response
import json
from modules.data.gateways.pessoagateway import PessoaGateway
from modules.exceptions.data import RecordAlreadyExistsException, RecordNotFoundException, PasswordInvalidException
from bson.json_util import dumps
from bson.objectid import ObjectId

pessoa_router = Blueprint('pessoa', __name__)

@pessoa_router.route('/api/pessoa/novo', methods=['POST'])
def novo():
    try:
        message_gateway = MessageGateway()
        data = request.get_json(force=True)
        message_gateway.register_new(g.app_session['_id'], data)
        return str(data)
    except RecordAlreadyExistsException as ex:
        return str(ex.record['_id'])

@pessoa_router.route('/api/pessoa/buscartodos', methods=['GET'])
def buscar_todos():
        return 'teste'
