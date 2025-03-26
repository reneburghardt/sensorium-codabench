from django.urls import path

from . import views

app_name = "pages"

urlpatterns = [
    path('', views.HomeView.as_view(), name="home"),
    # path(r'^competition/create', views.CompetitionFormView.as_view(), name="competition_create"),
    # path('competition/view/<int:competition_pk>/', views.CompetitionDetailView.as_view()),
    path('search', views.SearchView.as_view(), name="search"),
    path('organize', views.OrganizeView.as_view(), name="organize"),
    path('server_status', views.ServerStatusView.as_view(), name="server_status"),
    path('acknowledgements', views.AcknowledgementsView.as_view(), name="acknowledgements"),
    path('imprint', views.ImprintView.as_view(), name="imprint"),
    path('privacy_policy', views.PrivacyPolicyView.as_view(), name="privacy_policy"),
    path('terms_of_use', views.TermsOfUseView.as_view(), name="terms_of_use"),
    path('monitor_queues', views.MonitorQueuesView.as_view(), name="monitor_queues"),
    # path('test', views.CompetitionListTestView.as_view()),
]
