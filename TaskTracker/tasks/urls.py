from django.urls import path,include
from . import views
#from rest_framework.routers import DefaultRouter
from .views import TaskView




urlpatterns=[
    path('tasks/',TaskView.as_view(),name='tasks'),
    path('tasks/<int:pk>/',TaskView.as_view(),name='task-detail'),

]