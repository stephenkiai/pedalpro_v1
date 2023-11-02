from flask import Blueprint
from flask import jsonify
from models import db, Users, Friendship

buddy_bp = Blueprint('buddy', __name__)


@buddy_bp.route('/send_friend_request/<string:friend_id>', methods=['POST'])
def send_friend_request(friend_id):
    try:
        # Check if the friend (recipient of the friend request) exists in the database
        friend = Users.query.get(friend_id)

        if friend is None:
            return jsonify({"error": "Friend not found"}), 404

        # Check if a friendship between the current user and the friend already exists
        current_user_id = 'current_user_id'  # Replace with the actual current user's ID
        existing_friendship = Friendship.query.filter_by(user_id=current_user_id, friend_id=friend_id).first()

        if existing_friendship:
            return jsonify({"error": "You are already friends with this user"}), 400

        # Create a new friendship request
        new_friendship = Friendship(user_id=current_user_id, friend_id=friend_id)

        # Save the new friendship request to the database
        db.session.add(new_friendship)
        db.session.commit()

        return jsonify({"message": "Friend request sent successfully"}), 201

    except Exception as e:
        return jsonify({"error": "Failed to send friend request", "details": str(e)}), 500
    

@buddy_bp.route('/accept_friend_request/<string:friend_id>', methods=['POST'])
def accept_friend_request(friend_id):
    # Implement accepting a friend request
    pass

@buddy_bp.route('/get_user_buddies/<string:user_id>', methods=['GET'])
def get_user_buddies(user_id):
    user = Users.query.get(user_id)
    if user is None:
        return None

    buddies = [friendship.friend for friendship in user.buddies]
    return buddies
