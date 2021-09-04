from app import app
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy(app)
Migrate(app, db)

infotag = db.Table('infotag',
 db.Column('user_id', db.Integer, db.ForeignKey('info.info_id')),
 db.Column('tag_id', db.Integer, db.ForeignKey('tag.tag_id'))
)

class Info(db.Model):
    info_id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String(25))
    location = db.Column(db.String(15))
    url = db.Column(db.String(15))
    address = db.Column(db.String(50))
    phone_no = db.Column(db.String(15))
    relationship = db.relationship('Tag', secondary=infotag, backref=db.backref('infotags', lazy='dyanmic'))

class Tag(db.Model):
    tag_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))