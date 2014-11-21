from flask import Blueprint, request, g, Response
import json
from modules.data.gateways.pessoagateway import PessoaGateway
from modules.exceptions.data import RecordAlreadyExistsException, RecordNotFoundException, PasswordInvalidException
from bson.json_util import dumps
from bson.objectid import ObjectId

pessoa_router = Blueprint('pessoa', __name__)

@pessoa_router.route('/pessoa/api/novo', methods=['POST'])
def novo():
    try:
        pessoa_gateway = PessoaGateway()
        data = request.get_json(force=True)
        pessoa_gateway.register_new(data)
        return "ok"
    except RecordAlreadyExistsException as ex:
        return str(ex.record['_id'])

@pessoa_router.route('/api/pessoa/buscartodos', methods=['GET'])
def buscar_todos():
        return 'teste'
