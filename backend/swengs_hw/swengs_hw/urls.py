from django.conf.urls import url
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

from rest_framework_jwt.views import obtain_jwt_token

from django.contrib import admin
from swengs_hw_app import views

schema_view = get_schema_view(
    openapi.Info(
        title='API',
        default_version='v1'
    ),
)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('oem/options', views.oem_option_list),
    path('memorytype/options', views.memorytype_option_list),
    path('cpu/list', views.cpus_list),
    path('cpu/create', views.cpu_form_create),
    path('cpu/<int:pk>/get', views.cpu_form_get),
    path('cpu/<int:pk>/update', views.cpu_form_update),
    path('cpu/<int:pk>/delete', views.cpu_delete),

    path('oem/list', views.oems_list),
    path('oem/create', views.oem_form_create),
    path('oem/<int:pk>/get', views.oem_form_get),
    path('oem/<int:pk>/update', views.oem_form_update),
    path('oem/<int:pk>/delete', views.oem_delete),

    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    url(r'^api-token-auth/', obtain_jwt_token),
]
