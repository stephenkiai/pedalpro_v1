from flask import Blueprint, jsonify, request
from models import db, Users, Ride, Comment, Like
from datetime import datetime

ride_bp = Blueprint('ride', __name__)

@ride_bp.route('/create_ride', methods=['POST'])
def create_ride():
    try:
        # Get ride data from the request JSON
        ride_data = request.json

        # Extract ride information from the request data
        name = ride_data['name']
        location = ride_data['location']
        start_datetime = ride_data['start_datetime']
        image = ride_data.get('image', None)  # Optional image
        kilometers = ride_data['kilometers']

        # Get the user ID of the creator (you need to implement authentication)
        creator_id = 'user_id_from_authentication'

        # Create a new Ride object
        new_ride = Ride(
            name=name,
            location=location,
            start_datetime=start_datetime,
            image=image,
            kilometers=kilometers,
            creator_id=creator_id  # Associate the ride with its creator
        )

        # Save the new ride to the database
        db.session.add(new_ride)
        db.session.commit()

        return jsonify({"message": "Ride created successfully", "ride_id": new_ride.id}), 201

    except Exception as e:
        return jsonify({"error": "Failed to create ride", "details": str(e)}), 500
    

@ride_bp.route('/join_ride/<string:ride_id>', methods=['POST'])
def join_ride(ride_id):
    try:
        # Get the ride by its unique identifier (ride_id)
        ride = Ride.query.get(ride_id)

        if ride is None:
            return jsonify({"error": "Ride not found"}), 404

        # Implement the logic for a user joining the ride (e.g., increment the 'going' count)
        ride.going += 1

        # Save the updated ride information to the database
        db.session.commit()

        return jsonify({"message": "You have joined the ride successfully"}), 200

    except Exception as e:
        return jsonify({"error": "Failed to join the ride", "details": str(e)}), 500


@ride_bp.route('/all_rides', methods=['GET'])
def all_rides():
    try:
        # Retrieve all rides from the database
        rides = Ride.query.all()

        # Serialize the rides into a list of dictionaries
        ride_list = [ride.serialize() for ride in rides]

        return jsonify(ride_list)

    except Exception as e:
        return jsonify({"error": "Failed to retrieve all rides", "details": str(e)}), 500
    
    

@ride_bp.route('/invite_buddy/<string:ride_id>', methods=['POST'])
def invite_buddy(ride_id):
    # Implement inviting a buddy to a ride
    pass

@ride_bp.route('/share_ride/<string:ride_id>', methods=['POST'])
def share_ride(ride_id):
    # Implement sharing a ride
    pass

@ride_bp.route('/update_ride/<string:ride_id>', methods=['PUT'])
def update_ride(ride_id):
    # Implement updating ride details
    pass

@ride_bp.route('/delete_ride/<string:ride_id>', methods=['DELETE'])
def delete_ride(ride_id):
    # Implement deleting a ride
    pass


@ride_bp.route('/ride_profile/<string:ride_id>', methods=['GET'])
def ride_profile(ride_id):
    # Implement retrieving the profile of a specific ride
    pass
