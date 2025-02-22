from django.db import models

# rep person on team with personal details
class teamMember(models.Model):
    # diff roles, first val stored in database, second val shown in forms
    role_options = [('admin', 'Admin'), ('reg', 'Regular')]
    # team member contact info (name, email, phone, role)
    first_name = models.CharField(max_length = 35, help_text = "Enter member's first name")
    last_name = models.CharField(max_length = 35, help_text = "Enter member's last name")
    email_addr = models.EmailField(unique = True, help_text = "Provide a valid email address")
    phone_num = models.CharField(max_length = 16, help_text = "Enter a phone number in format: (ex: 123-456-7890)")
    role = models.CharField(max_length = 16, options = role_options, default = 'reg', help_text = "Select member's role (Admin or Regular Member)")
    
    # returns more readable representation of member
    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.role})"
    