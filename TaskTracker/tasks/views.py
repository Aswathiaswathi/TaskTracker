from django.shortcuts import render
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
def home_page(request):
    return render(request,'home.html')

class TaskView(APIView):
    def get(self,request,pk=None):
        if pk:
            task=Task.objects.get(pk=pk)
            serializer=TaskSerializer(task)
            print(serializer.data)
            return Response(serializer.data)
        else:
            tasks=Task.objects.all()
            serializer=TaskSerializer(tasks,many=True)
            return Response(serializer.data)

    def post(self,request):
        print("request data",request.data)
        serializer=TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            print("Serializer errors:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        #return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def put(self,request,pk):
        task=Task.objects.get(pk=pk)
        serializer=TaskSerializer(task,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk):
        print("Hii",pk)
        try:
            task=Task.objects.get(pk=pk)
            task.delete()
            return Response({'message': 'Task deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)