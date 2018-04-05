#! ../env/bin/python
from flask import Flask

from app.controllers.main import blueprint as api


def create_app():
    app = Flask(__name__, static_folder='static', template_folder='templates')

    # register blueprints
    app.register_blueprint(api, url_prefix='/api')

    return app
