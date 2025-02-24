from rest_framework import permissions

# only admins can modify data, others have read/view only access
class isAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            # allow read only actions
            return True
        # restrict edit/delete access to admins only
        return request.user.is_staff
    