from django.contrib import admin
from models import Mailing


class MailingAdmin(admin.ModelAdmin):
    model = Mailing
    list_display = ('email',)
    search_fields = ('email',)

admin.site.register(Mailing)
