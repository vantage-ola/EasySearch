from app import app
from flask import request,jsonify
from models import db, Info, info_schema

@app.route('/', methods=['POST'])
def get_data():
    name = request.json['name']
    location = request.json['location']
    url = request.json['url']
    address = request.json['address']
    phone_no = request.json['phone_no']

    info = Info(name,location,url,address,phone_no)
    db.session.add(info)
    db.session.commit()

    return info_schema.jsonify(info)