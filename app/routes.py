from app import app
from flask import request,jsonify

from models import db, Info,Tag, tags_schema, tag_schema, info_schema, infos_schema
from utils import build_link_header

BASE_URL = "/api/get"

@app.route('/api', methods=['POST'])
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

@app.route('/api/get', methods = ['GET'])
def getData():
    page = request.args.get("page", 1, type=int)
    per_page = request.args.get("per-page", 10, type=int)

    all_info = Info.query.paginate(page, per_page)
    results = infos_schema.dump(all_info.items)

    link_header = build_link_header(
        query=all_info, base_url=BASE_URL, per_page=per_page
    )
    return jsonify(results), link_header

@app.route('/api/tag', methods= ['GET'])
def getTag():
    all_info = Tag.query.all()
    results = tags_schema.dump(all_info)

    return jsonify(results)
    
@app.route('/api/get/<id>/', methods = ['GET'])
def getOneData(id):
    one_info = Info.query.get(id)
    
    return info_schema.jsonify(one_info)

@app.route('/api/update/<id>/', methods= ['PUT'])
def updateData(id):
    one_info = Info.query.get(id)

    name = request.json['name']
    location = request.json['location']
    url = request.json['url']
    address = request.json['address']
    phone_no = request.json['phone_no']

    one_info.name = name
    one_info.location = location
    one_info.url = url
    one_info.address = address
    one_info.phone_info = phone_no

    db.session.commit()
    return info_schema.jsonify(one_info)


@app.route('/api/delete/<id>/', methods= ['DELETE'])
def deleteData(id):
    one_info = Info.query.get(id)

    db.session.delete(id)
    db.session.commit()

    return info_schema.jsonify(one_info)

