from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from datetime import datetime


ma = Marshmallow()
db = SQLAlchemy()

participants = db.Table(
    'participants',
    db.Column('user_id', db.String(36), db.ForeignKey('tblusers.id')),
    db.Column('ride_id', db.String(36), db.ForeignKey('ride.id'))
)


class Users(db.Model):
    __tablename__ = "tblusers"
    id = db.Column(db.String(36), primary_key=True, unique=True)
    name = db.Column(db.String(150), index=True, unique=True)
    email = db.Column(db.String(150), index=True, unique=True)
    password = db.Column(db.String(255), index=True, unique=False)
    profile_photo = db.Column(db.String(255), nullable=True)
    role = db.Column(db.String(50))

    profile = db.relationship('UserProfile', uselist=False, back_populates='user')

    rides = db.relationship(
        'Ride',
        secondary=participants,
        back_populates='participants'
    )

    def __init__(self, id, name, email, password, role):
        self.id = id
        self.name = name
        self.email = email
        self.password = password
        self.role = role


class UserProfile(db.Model):
    __tablename__ = "user_profiles"
    id = db.Column(db.Integer, primary_key=True)
    location = db.Column(db.String(150), nullable=True)
    age = db.Column(db.Integer, nullable=True)
    profile_image = db.Column(db.String(255), nullable=True)
    first_name = db.Column(db.String(150), nullable=True)
    last_name = db.Column(db.String(150), nullable=True)
    top_speed = db.Column(db.Float, nullable=True)
    avg_speed = db.Column(db.Float, nullable=True)
    distance = db.Column(db.Float, nullable=True)
    calories_burnt = db.Column(db.Float, nullable=True)
    miles = db.Column(db.Float, nullable=True)
    max_speed = db.Column(db.Float, nullable=True)
    user_id = db.Column(db.String(36), db.ForeignKey('tblusers.id'), unique=True)

    user = db.relationship('Users', back_populates='profile')


class Ride(db.Model):
    __tablename__ = 'ride'

    id = db.Column(db.String(36), primary_key=True)  # Specify the length for VARCHAR
    name = db.Column(db.String(255))
    location = db.Column(db.String(255))
    distance = db.Column(db.String(50))
    start_datetime = db.Column(db.DateTime)

    participants = db.relationship(
        'Users',
        secondary=participants,
        back_populates='rides'
    )

    def __init__(self, id, name, location, distance, start_datetime):
        self.id = id
        self.name = name
        self.location = location
        self.distance = distance
        self.start_datetime = start_datetime

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'first_name', 'last_name', 'email',
                  'role','location', 'age','top_speed','avg_speed',
                  'distance', 'calories_burnt', 'miles', 'max_speed')