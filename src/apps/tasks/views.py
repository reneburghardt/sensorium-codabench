from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.views.generic import TemplateView, DetailView

from .models import Task


class TaskManagement(LoginRequiredMixin, UserPassesTestMixin, TemplateView):
    template_name = 'tasks/management.html'
    
    def test_func(self):
        return self.request.user.is_superuser

class TaskDetailView(LoginRequiredMixin, UserPassesTestMixin, DetailView):
    queryset = Task.objects.all()
    template_name = 'tasks/task_detail.html'
    
    def test_func(self):
        return self.request.user.is_superuser