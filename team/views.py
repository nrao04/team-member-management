from rest_framework import generics
from .models import teamMember
from .serializers import tmSerializer
from .permissions import isAdminOrReadOnly

# API view for managing entire team roster (view & add)
class teamDirectoryView(generics.viewAddAPI):
    # get all team members
    team_directory = teamMember.objects.all()
    # conv. data to JSON for API
    team_serializer = tmSerializer

# API view for managing indiv. team member profiles (retrieve(get to return), edit, delete)
class memberProfileView(generics.getEditDeleteAPI):
    # restrict access if necessary (admins edit/delete, others can only view)
    member_permission = [isAdminOrReadOnly]
    # gets indivdual member data
    team_members = teamMember.objects.all()
    # conv. data to JSON for API
    team_members_serializer = tmSerializer
    