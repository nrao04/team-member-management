# Generated by Django 5.1.6 on 2025-02-24 01:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0002_rename_email_addr_teammember_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teammember',
            name='role',
            field=models.CharField(choices=[('admin', 'Admin'), ('reg', 'Regular')], default='regular', help_text="Select member's role (Admin or Regular Member)", max_length=16),
        ),
    ]
