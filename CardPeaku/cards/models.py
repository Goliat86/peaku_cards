from django.db import models

# Create your models here.
class cards(models.Model):
    title = models.CharField(max_length=20)
    description = models.CharField(blank=True)