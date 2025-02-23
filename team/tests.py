from django.test import TestCase
from .models import teamMember

# testing if team members created appropriately
class tmTestCases(TestCase):
    # create team member before test (using setUp for faster debugging)
    def setUp(self):
        teamMember.objects.create(first_name = "Nikhil", last_name = "Rao", role = "admin")
        
    def test_addTeamMember(self):
        nikhil = teamMember.objects.get(first_name = "Nikhil")
        # use assert equal to check if role is correct
        self.assertEqual(nikhil.last_name, "Rao")
        self.assertEqual(nikhil.role, "admin")
