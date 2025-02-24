from rest_framework.permissions import BasePermission

# only admins can modify data, others have read/view only access
class isAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in ['GET', 'HEAD', 'OPTIONS']:
            # allow read only actions
            return True
        # restrict edit/delete access to admins only
        if request.method == 'DELETE':
            return request.user.is_authenticated and request.user.is_staff 
        return True
    