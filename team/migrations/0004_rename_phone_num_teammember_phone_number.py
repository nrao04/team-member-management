# Generated by Django 5.1.6 on 2025-02-24 01:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0003_alter_teammember_role'),
    ]

    operations = [
        migrations.RenameField(
            model_name='teammember',
            old_name='phone_num',
            new_name='phone_number',
        ),
    ]
