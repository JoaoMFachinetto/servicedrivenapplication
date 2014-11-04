#-*- coding: utf-8 -*-
from flask import Blueprint, render_template, abort, url_for, redirect, g, request
from jinja2 import TemplateNotFound

home_router = Blueprint('home', __name__, template_folder='templates')

@home_router.route('/', methods=['GET'])
def index():
    try:
        return render_template('home.html')
    except TemplateNotFound:
        abort(404)
