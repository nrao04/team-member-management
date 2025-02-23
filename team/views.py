from rest_framework import generics
from .models import teamMember
from .serializers import tmSerializer

# API view for managing entire team roster (list & create)
class tmDirectoryView(generics.rosterManagementAPI):
    # get all team members
    team_members_data = teamMember.objects.all()
    # conv. data to JSON for API
    team_serializer = tmSerializer
