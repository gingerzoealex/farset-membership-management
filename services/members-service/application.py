from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy


application = Flask(__name__)


CORS(application)


application.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:@localhost:5432/members'


database = SQLAlchemy(application)

class Member(database.Model):
    id = database.Column(database.Integer, primary_key=True)
    name = database.Column(database.String(80))
    email = database.Column(database.String(80))

    def __repr__(self):
        return '<Member(id=%i name=%s email=%s)>' % (self.id, self.name, self.email)

    def serialize(self):
        return { 'id': self.id, 'name': self.name, 'email': self.email }

database.create_all()


@application.route('/members', methods=['GET', 'POST'])
def members():
    if request.method == 'GET':
        members = Member.query.all()

        return jsonify([member.serialize() for member in members]), 200
    elif request.method == 'POST':
        name = request.json.get('name', None)
        email = request.json.get('email', None)

        member = Member(name=name, email=email)

        database.session.add(member)
        database.session.commit()

        return jsonify(member.serialize()), 201


@application.route('/members/<int:member_id>', methods=['PUT', 'DELETE'])
def member(member_id):
    if request.method == 'PUT':
        name = request.json.get('name', 'No name')
        email = request.json.get('email', None)

        member = Member.query.get(member_id)

        member.name = name
        member.email = email

        database.session.add(member)
        database.session.commit()

        return jsonify(member.serialize()), 200
    elif request.method == 'DELETE':
        member = Member.query.get(member_id)

        database.session.delete(member)
        database.session.commit()

        return jsonify(None), 204


if __name__ == '__main__':
    application.debug = True
    application.run(host='0.0.0.0', port='3000')
