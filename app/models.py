from sqlalchemy.orm import relationship
from app import app
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow


db = SQLAlchemy(app)
ma = Marshmallow(app)

Migrate(app, db)

infotag = db.Table('infotag',
 db.Column('user_id', db.Integer, db.ForeignKey('info.id')),
 db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'))
)

class Info(db.Model):

    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String(50))
    location = db.Column(db.String(20))
    url = db.Column(db.String(50))
    address = db.Column(db.String(75))
    phone_no = db.Column(db.String(50))
    infotags = db.relationship('Tag', secondary=infotag, backref=db.backref('infotag_rel', lazy= True))

    def __init__(self, name, location, url, address, phone_no):
        self.name = name
        self.location = location
        self.url = url
        self.address = address
        self.phone_no = phone_no

class Tag(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))

    def __init__(self, name):
        self.name = name

class TagSchema(ma.Schema):
    
    class Meta:
        model = Tag
    
class InfoSchema(ma.Schema):
    
    relationship = ma.Nested(TagSchema, many=True)

    class Meta:
        model = Info
        #'id','name','location','url','address','phone_no'



info_schema = InfoSchema()
infos_schema = InfoSchema(many=True)
tag_schema = TagSchema()