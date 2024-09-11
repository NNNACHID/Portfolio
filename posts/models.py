from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=255, unique=True, default="SOME STRING")
    description = models.TextField(verbose_name="Description",
        help_text="Enter a description",
        null=True,
        blank=True,)
    picture = models.ImageField(blank=True, null=True)
    project_url = models.URLField(max_length=255, null=True, blank=True, verbose_name="Lien du projet")
    techs = models.JSONField(default=dict)