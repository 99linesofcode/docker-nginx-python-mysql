from flask import Blueprint, render_template, flash, request, redirect, url_for

blueprint = Blueprint('api', __name__)


@blueprint.route('/')
def home():
    return "Hello"
