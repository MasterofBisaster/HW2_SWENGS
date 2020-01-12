from rest_framework import serializers

from swengs_hw_app.models import OEM, CPU, MemoryType


class OEMOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = OEM
        fields = ['id', 'name']


class MemoryTypeOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemoryType
        fields = ['id', 'name']


class CPUListSerializer(serializers.ModelSerializer):
    manufacturer_name = serializers.SerializerMethodField()

    class Meta:
        model = CPU
        fields = ['id', 'name', 'manufacturer_name', 'coremultiplier', 'price']

    # def get_manufacturer_name(self, obj):
    #    manufacturer_names = ''
    #    for o in obj.manufacturer.all():
    #        manufacturer_names += o.name + ', '
    #    return manufacturer_names
    def get_manufacturer_name(self, obj):
        return obj.manufacturer.name if obj.manufacturer else ''


class CPUFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = CPU
        fields = '__all__'


class OEMListSerializer(serializers.ModelSerializer):
    class Meta:
        model = OEM
        fields = ['id', 'name', 'dateOfFounding', 'employeeCount', 'ceo']


class OEMFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = OEM
        fields = '__all__'
