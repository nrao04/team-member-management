from rest_framework import serializers
from .models import teamMember

# automates model for JSON conv.(APIs)
class tmSerializer (serializers.ModelSerializer):
    model = teamMember
    # incl. only some fields for better secruity, more control
    fields = ['first_name', 'last_name', 'email_addr']