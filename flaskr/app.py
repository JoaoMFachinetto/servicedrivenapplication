from flask import Flask, request, session, abort
from flask import render_template
from bson.objectid import ObjectId
from modules.router.home import home_router
from modules.api.pessoa import pessoa_router
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

app = Flask(__name__)
app.register_blueprint(home_router)
app.register_blueprint(pessoa_router)

app.debug = True


if __name__ == '__main__':
    app.run(host='0.0.0.0', port = 8081)
