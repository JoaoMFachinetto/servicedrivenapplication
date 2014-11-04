from flask import Blueprint, request, g, Response
import json
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from decorators import session_auth, crossdomain
from modules.data.gateways.messagegateway import MessageGateway
from modules.exceptions.data import RecordAlreadyExistsException, RecordNotFoundException, PasswordInvalidException
from bson.json_util import dumps
from bson.objectid import ObjectId

io_router = Blueprint('io', __name__)

@io_router.route('/io/api/registerevent', methods=['POST'])
@session_auth
def register_event():
    try:
        message_gateway = MessageGateway()
        data = request.get_json(force=True)
        message_gateway.register_message(g.app_session['_id'], data)
        return str(data)
    except RecordAlreadyExistsException as ex:
        return str(ex.record['_id'])


@io_router.route('/io/api/getevents/<chave>', methods=['GET'])
@crossdomain(origin='*')
def get_events(chave):
    try:
        message_gateway = MessageGateway()
        return Response(dumps(message_gateway.get_all()),  mimetype='application/json')
    except RecordNotFoundException:
        return dumps(['Error', 'Nenhum Evento'])
