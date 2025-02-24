from rest_framework import generics
from .models import teamMember
from .serializers import tmSerializer
from .permissions import isAdminOrReadOnly

# API view for managing entire team roster (view & add)
class teamDirectoryView(generics.ListCreateAPIView):
    # get all team members
    queryset = teamMember.objects.all()
    # conv. data to JSON for API
    serializer_class = tmSerializer

# API view for managing indiv. team member profiles (retrieve(get to return), edit, delete)
class memberProfileView(generics.RetrieveUpdateDestroyAPIView):
    # gets indivdual member data, (but filtered based on ID, e.g.. 1 - nick, 2 - bob)
    queryset = teamMember.objects.all()
    # conv. data to JSON for API
    serializer_class = tmSerializer
    # restrict access if necessary (admins edit/delete, others can only view)
    member_permission = [isAdminOrReadOnly]
    