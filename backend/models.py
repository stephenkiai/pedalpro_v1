from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from datetime import datetime


ma = Marshmallow()
db = SQLAlchemy()

class Friendship(db.Model):
    __tablename__ = "friendships"
    id = db.Column(db.String(36), primary_key=True, unique=True)
    user_id = db.Column(db.String(36), db.ForeignKey('tblusers.id'))
    friend_id = db.Column(db.String(36), db.ForeignKey('tblusers.id'))

class Users(db.Model):
    __tablename__ = "tblusers"
    id = db.Column(db.String(36), primary_key=True, unique=True)
    name = db.Column(db.String(150), index=True, unique=True)
    email = db.Column(db.String(150), index=True, unique=True)
    password = db.Column(db.String(255), index=True, unique=False)
    profile_photo = db.Column(db.String(255), nullable=True)
    role = db.Column(db.String(50))

    profile = db.relationship('UserProfile', uselist=False, back_populates='user')
    """comments = db.relationship('Comment', back_populates='user')
    likes = db.relationship('Like', back_populates='user')
    rides_created = db.relationship('Ride', back_populates='creator')
    locations = db.relationship('Location', back_populates='user')
    buddies = db.relationship('Friendship', foreign_keys=[Friendship.user_id], back_populates='user')
    friend_of = db.relationship('Friendship', foreign_keys=[Friendship.friend_id], back_populates='friend')"""

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


"""
class Ride(db.Model):
    __tablename__ = "rides"
    id = db.Column(db.String(36), primary_key=True, unique=True)
    name = db.Column(db.String(150))
    location = db.Column(db.String(150))
    start_datetime = db.Column(db.DateTime)
    image = db.Column(db.String(255))
    creator_id = db.Column(db.String(36), db.ForeignKey('tblusers.id'))
    distance = db.Column(db.Float)
    going = db.Column(db.Integer, default=0)
    started_at = db.Column(db.DateTime, default=None)
    ended_at = db.Column(db.DateTime, default=None)

    comments = db.relationship('Comment', backref='ride', lazy=True)
    likes = db.relationship('Like', backref='ride', lazy=True)

    creator_id = db.Column(db.String(36), db.ForeignKey('tblusers.id'))
    creator = db.relationship('Users', foreign_keys=[creator_id])
    comments = db.relationship('Comment', back_populates='ride')
    likes = db.relationship('Like', back_populates='ride')

    def __init__(self, name, location, start_datetime, creator, distance):
        self.name = name
        self.location = location
        self.start_datetime = start_datetime
        self.creator = creator
        self.distance = distance
        self.started_at = None
        self.creator_id = creator.id
        creator.going_to_rides.append(self)

    def start_ride(self):
        self.started_at = datetime.utcnow()

    def end_ride(self):
        self.ended_at = datetime.utcnow()


class Location(db.Model):
    __tablename__ = "locations"
    id = db.Column(db.String(36), primary_key=True, unique=True)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    user_id = db.Column(db.String(36), db.ForeignKey('tblusers.id')) 

    rides = db.relationship('Ride', back_populates='location')
    user = db.relationship('Users', back_populates='locations')
    Ride.location = db.relationship('Location', back_populates='rides')



class Comment(db.Model):
    __tablename__ = "comments"
    id = db.Column(db.String(36), primary_key=True, unique=True)
    text = db.Column(db.String(255))
    user_id = db.Column(db.String(36), db.ForeignKey('tblusers.id'))
    ride_id = db.Column(db.String(36), db.ForeignKey('rides.id'))
    created_at = db.Column(db.DateTime, default=datetime.now)

    user = db.relationship('Users', back_populates='comments')
    ride = db.relationship('Ride', back_populates='comments')


class Like(db.Model):
    __tablename__ = "likes"
    id = db.Column(db.String(36), primary_key=True, unique=True)
    user_id = db.Column(db.String(36), db.ForeignKey('tblusers.id'))
    ride_id = db.Column(db.String(36), db.ForeignKey('rides.id'))

    user = db.relationship('Users', back_populates='likes')
    ride = db.relationship('Ride', back_populates='likes')
"""


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'first_name', 'last_name', 'email',
                  'role','location', 'age','top_speed','avg_speed',
                  'distance', 'calories_burnt', 'miles', 'max_speed')