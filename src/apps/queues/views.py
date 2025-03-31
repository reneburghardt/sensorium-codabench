from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.views.generic import TemplateView


class QueueManagementView(LoginRequiredMixin, UserPassesTestMixin, TemplateView):
    template_name = 'queues/management.html'
    
    def test_func(self):
        return self.request.user.is_superuser
