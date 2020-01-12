from django.contrib import admin

from swengs_hw_app.models import OEM, CPU, MemoryType


class OEMAdmin(admin.ModelAdmin):
    pass


class CPUAdmin(admin.ModelAdmin):
    pass


class MemoryTypeAdmin(admin.ModelAdmin):
    pass


admin.site.register(OEM, OEMAdmin)
admin.site.register(CPU, CPUAdmin)
admin.site.register(MemoryType, MemoryTypeAdmin)
# Register your models here.
