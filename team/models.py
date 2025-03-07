from django.db import models

# rep person on team with personal details
class teamMember(models.Model):
    # diff roles, first val stored in database, second val shown in forms
    role_options = [('admin', 'Admin'), ('regular', 'Regular')]
    # team member contact info (name, email, phone, role)
    first_name = models.CharField(max_length = 35, blank = False, null = False, help_text = "Enter member's first name")
    last_name = models.CharField(max_length = 35, blank = False, null = False, help_text = "Enter member's last name")
    email = models.EmailField(unique = True, blank = False, null = False, help_text = "Provide a valid email address")
    phone_number = models.CharField(max_length = 16, blank = False, null = False, help_text = "Enter a phone number in format: (ex: 123-456-7890)")
    role = models.CharField(max_length = 16, choices = role_options, default = 'regular', blank = False, null = False, help_text = "Select member's role (Admin or Regular Member)")
    
     # override the save method to ensure only one admin exists at a time
    def save(self, *args, **kwargs):
        if self.role == 'admin':
            # set all other members to 'regular' before saving
            teamMember.objects.filter(role='admin').update(role='regular')
        super().save(*args, **kwargs)
    
    # returns more readable representation of member
    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.role})"
    