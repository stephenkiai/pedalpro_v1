from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from models import db, Users, Ride
from datetime import datetime
import uuid


ride_bp = Blueprint('ride', __name__, url_prefix="/ride")

@ride_bp.route('/create', methods=['POST'])
#@jwt_required()
def create_ride():
    data = request.get_json()

    name = data.get('name')
    location = data.get('location')
    distance = data.get('distance')
    start_datetime = data.get('start_datetime')

    if name and location and distance and start_datetime:
        try:
            # Ensure correct format 'DD/MM/YYYY HH:MM:SS'
            formatted_start_datetime = datetime.strptime(start_datetime, '%d/%m/%Y %H:%M:%S').strftime('%Y-%m-%d %H:%M:%S')

            ride_id = str(uuid.uuid4())
            # Reminder: Implement double entry check
            ride = Ride(id=ride_id, name=name, location=location, distance=distance, start_datetime=formatted_start_datetime)
            db.session.add(ride)
            db.session.commit()
            return jsonify({"message": "Ride created successfully"}), 201
        except ValueError:
            return jsonify({"error": "Invalid date format. Use DD/MM/YYYY HH:MM:SS format for start_datetime"}), 400
    return jsonify({"error": "Invalid ride data"}), 400


@ride_bp.route('/all', methods=['GET'])
def all_rides():
    # Retrieve all rides from the database
    rides = Ride.query.all()

    # Convert to a list of dictionaries
    rides_data = [{"id": ride.id, "name": ride.name, "location": ride.location, "distance": ride.distance, "start_datetime": ride.start_datetime.strftime('%Y-%m-%d %H:%M:%S')} for ride in rides]

    return jsonify(rides_data), 200


@ride_bp.route('/view/<string:ride_id>', methods=['GET'])
def get_ride_by_id(ride_id):
    # Retrieve the ride by its ID from the database
    ride = Ride.query.get(ride_id)

    if ride is not None:
        ride_data = {
            "id": ride.id,
            "name": ride.name,
            "location": ride.location,
            "distance": ride.distance,
            "start_datetime": ride.start_datetime.strftime('%Y-%m-%d %H:%M:%S')
        }
        return jsonify(ride_data), 200
    else:
        return jsonify({"error": "Ride not found"}), 404


@ride_bp.route('/delete/<string:ride_id>', methods=['DELETE'])
def delete_ride(ride_id):
    # Retrieve the ride by its ID from the database
    ride = Ride.query.get(ride_id)

    if ride is not None:
        # Delete the ride from the database
        db.session.delete(ride)
        db.session.commit()
        return jsonify({"message": "Ride deleted successfully"}), 200
    else:
        return jsonify({"error": "Ride not found"}), 404
    

@ride_bp.route('/join/<string:ride_id>', methods=['POST'])
def join_ride(ride_id):
    data = request.get_json()
    user_id = data.get('user_id')  # Get the user's ID

    ride = Ride.query.get(ride_id)
    user = Users.query.get(user_id)

    if ride is not None and user is not None:
        ride.participants.append(user)
        db.session.commit()
        return jsonify({"message": "User joined the ride successfully"}), 200
    else:
        return jsonify({"error": "Invalid ride or user data"}), 400



@ride_bp.route('/invite/<string:ride_id>', methods=['POST'])
def invite_buddy(ride_id):
    # to implement
    pass

@ride_bp.route('/share/<string:ride_id>', methods=['POST'])
def share_ride(ride_id):
     # to implement
    pass

@ride_bp.route('/update/<string:ride_id>', methods=['PUT'])
def update_ride(ride_id):
    # to implement
    pass
