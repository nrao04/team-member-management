from rest_framework import serializers
from .models import teamMember

# automates model for JSON conv.(APIs)
class tmSerializer (serializers.ModelSerializer):
    class Meta:
        model = teamMember
        # added all fields for testing (like in assignment)
        fields = ['id','first_name', 'last_name', 'email', 'phone_number', 'role']
    
    # ensures first name is not empty or just space chars
    def validate_first_name(self, value):
        if not value.strip():
            raise serializers.ValidationError("First name cannot be empty.")
        return value

    # ensures last name is not empty or just space chars
    def validate_last_name(self, value):
        if not value.strip():
            raise serializers.ValidationError("Last name cannot be empty.")
        return value

    # ensures email is not empty
    def validate_email(self, value):
        if not value.strip():
            raise serializers.ValidationError("Email cannot be empty.")
        return value

    # ensures phone number is not empty
    def validate_phone_number(self, value):
        if not value.strip():
            raise serializers.ValidationError("Phone number cannot be empty.")
        return value

    # ensures only admin or regular is allowed for role choice
    def validate_role(self, value):
        valid_roles = ['admin', 'regular']
        if value not in valid_roles:
            raise serializers.ValidationError("Invalid role. Choose 'admin' or 'regular'.")
        return value