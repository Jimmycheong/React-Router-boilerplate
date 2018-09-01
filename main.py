import time
from flask import (
    Flask,
    request,
    url_for,
    redirect,
    make_response,
    render_template,
    jsonify,
    redirect
)

app = Flask(__name__)

@app.route("/",  methods=['GET'])
def index():
    resp = make_response(render_template('index.html'), 200)
    return resp

@app.errorhandler(404)
def not_found(error):
    return redirect('/')
    # return render_template('error.html'), 404
