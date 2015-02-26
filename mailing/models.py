from django.db import models


class Mailing(models.Model):
    email = models.EmailField(max_length=200)
