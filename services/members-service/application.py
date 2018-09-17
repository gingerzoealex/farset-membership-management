from flask import Flask, request, jsonify
from flask_cors import CORS


application = Flask(__name__)


CORS(application)


@application.route('/members', methods=['GET', 'POST'])
def members():
    if request.method == 'GET':
        return jsonify([{ 'id': 1, 'name': 'Olga Rios' }, { 'id': 2, 'name': 'Mitchell Simpson' }]), 200
    elif request.method == 'POST':
        return jsonify({ 'id': 1, 'name': 'Olga Rios' }), 201


@application.route('/members/<int:member_id>', methods=['PUT', 'DELETE'])
def member(member_id):
    if request.method == 'PUT':
        return jsonify({ 'id': member_id, 'name': 'Gwendolyn Carlson' }), 200
    elif request.method == 'DELETE':
        return jsonify(None), 204


if __name__ == '__main__':
    application.debug = True
    application.run(host='0.0.0.0', port='3000')
