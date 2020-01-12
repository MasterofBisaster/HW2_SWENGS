from django.shortcuts import render

from django.contrib.auth.decorators import permission_required
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from swengs_hw_app.models import OEM, MemoryType, CPU
from swengs_hw_app.serializers import CPUListSerializer, CPUFormSerializer, OEMFormSerializer, OEMListSerializer, \
    OEMOptionSerializer, MemoryTypeOptionSerializer


# Create your views here

@swagger_auto_schema(method='GET', responses={200: OEMOptionSerializer(many=True)})
@api_view(['GET'])
def oem_option_list(request):
    oems = OEM.objects.all()
    serializer = OEMOptionSerializer(oems, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: MemoryTypeOptionSerializer(many=True)})
@api_view(['GET'])
def memorytype_option_list(request):
    memorytypes = MemoryType.objects.all()
    serializer = MemoryTypeOptionSerializer(memorytypes, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: CPUListSerializer(many=True)})
@api_view(['GET'])
@permission_required('swengs_hw_app.view_cpu', raise_exception=True)
def cpus_list(request):
    cpus = CPU.objects.all()
    serializer = CPUListSerializer(cpus, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=CPUFormSerializer, responses={200: CPUFormSerializer()})
@api_view(['POST'])
@permission_required('swengs_hw_app.add_cpu', raise_exception=True)
def cpu_form_create(request):
    data = JSONParser().parse(request)
    serializer = CPUFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=CPUFormSerializer, responses={200, CPUFormSerializer()})
@api_view(['PUT'])
@permission_required('swengs_hw_app.change_cpu', raise_exception=True)
def cpu_form_update(request, pk):
    try:
        cpu = CPU.objects.get(pk=pk)
    except CPU.DoesNotExist:
        return Response({'error': 'CPU does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = CPUFormSerializer(cpu, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: CPUFormSerializer()})
@api_view(['GET'])
@permission_required('swengs_hw_app.view_cpu', raise_exception=True)
def cpu_form_get(request, pk):
    try:
        cpu = CPU.objects.get(pk=pk)
    except CPU.DoesNotExist:
        return Response({'error': 'CPU does not exist.'}, status=404)

    serializer = CPUFormSerializer(cpu)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_required('swengs_hw_app.delete_cpu', raise_exception=True)
def cpu_delete(request, pk):
    try:
        cpu = CPU.objects.get(pk=pk)
    except CPU.DoesNotExist:
        return Response({'error': 'CPU does not exist.'}, status=404)
    cpu.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: OEMListSerializer(many=True)})
@api_view(['GET'])
@permission_required('swengs_hw_app.view_oem', raise_exception=True)
def oems_list(request):
    oems = OEM.objects.all()
    serializer = OEMListSerializer(oems, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=OEMFormSerializer, responses={200: OEMFormSerializer()})
@api_view(['POST'])
@permission_required('swengs_hw_app.add_oem', raise_exception=True)
def oem_form_create(request):
    data = JSONParser().parse(request)
    serializer = OEMFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=OEMFormSerializer, responses={200, OEMFormSerializer()})
@api_view(['PUT'])
@permission_required('swengs_hw_app.change_oem', raise_exception=True)
def oem_form_update(request, pk):
    try:
        oem = OEM.objects.get(pk=pk)
    except OEM.DoesNotExist:
        return Response({'error': 'OEM does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = OEMFormSerializer(oem, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: OEMFormSerializer()})
@api_view(['GET'])
@permission_required('swengs_hw_app.view_oem', raise_exception=True)
def oem_form_get(request, pk):
    try:
        oem = OEM.objects.get(pk=pk)
    except OEM.DoesNotExist:
        return Response({'error': 'OEM does not exist.'}, status=404)

    serializer = OEMFormSerializer(oem)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_required('swengs_hw_app.delete_oem', raise_exception=True)
def oem_delete(request, pk):
    try:
        oem = OEM.objects.get(pk=pk)
    except OEM.DoesNotExist:
        return Response({'error': 'OEM does not exist.'}, status=404)
    oem.delete()
    return Response(status=204)
