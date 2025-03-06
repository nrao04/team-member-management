from rest_framework.permissions import BasePermission, SAFE_METHODS

# only admins can modify data, others have read/view only access
class isAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            # allow read only actions
            return True
        # restrict edit/delete access to admins only
        if request.method == ['DELETE', 'PUT', 'PATCH']:
            return request.user.is_authenticated and request.user.is_staff 
        return True
    