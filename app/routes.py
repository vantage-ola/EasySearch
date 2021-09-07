from app import app
from flask import request,jsonify
from models import db, Info, info_schema, infos_schema

@app.route('/', methods=['POST'])
def addData():
    name = request.json['name']
    location = request.json['location']
    url = request.json['url']
    address = request.json['address']
    phone_no = request.json['phone_no']

    info = Info(name,location,url,address,phone_no)
    db.session.add(info)
    db.session.commit()

    return info_schema.jsonify(info)

@app.route('/get', methods = ['GET'])
def getData():
    all_info = Info.query.all()
    results = infos_schema.dump(all_info)

    return jsonify(results)

@app.route('/get/<id>/', methods = ['GET'])
def getOneData(id):
    one_info = Info.query.get(id)
    
    return info_schema.jsonify(one_info)

@app.route('/update/<id>/', methods= ['PUT'])
def updateData(id):
    one_info = Info.query.get(id)

    name = request.json['name']
    location = request.json['location']
    url = request.json['url']
    address = request.json['address']
    phone_no = request.json['phone_no']

@app.route('/delete/<id>/', methods= ['DELETE'])
def deleteData(id):
    one_info = Info.query.get(id)

    db.session.delete(id)
    db.session.commit()

    return info_schema.jsonify(one_info)

