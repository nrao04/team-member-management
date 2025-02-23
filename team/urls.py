from django.urls import path # import Django path funct.
from .views import teamDirectoryView, memberProfileView # import views to handle req

# url patterns for team member API
urlpatterns = [
    # route for handling full list of team members
    path('members/', teamDirectoryView.as_view(), name = 'team-list'),
    # route for handling individual team members by ID
    path('members/<int:pk>/', memberProfileView.as_view(), name = 'team-detail'),
]