from django.shortcuts import render
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from random import randint
import json
from rest_framework import status
from subscription.models import User
from .serializers import UserSerializer

# Create your views here.
class subscribe(APIView):
    authentication_classes = [SessionAuthentication]
    
    def post(self,request):
        try:
            User.objects.create(email=request.data.get('emailid'))
            return Response(status=status.HTTP_201_CREATED)
        except  Exception as err:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
class users(APIView):
    authentication_classes = [SessionAuthentication]
    
    def get(self,request):
        try:
            serializer = UserSerializer(User.objects.all(),many=True)
            return Response({"users":serializer.data} , status=status.HTTP_200_OK)
        except  Exception as err:
            return Response({"message":str(err)},status=status.HTTP_400_BAD_REQUEST)
        