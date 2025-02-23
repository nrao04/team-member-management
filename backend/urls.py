from django.contrib import admin
from django.urls import path, include # import incl. to ref app urls

urlpatterns = [
    path('admin/', admin.site.urls),
    # incl. API routes from team app
    path('api/', include('team.urls')),
]
