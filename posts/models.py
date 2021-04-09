from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=50)
    content = models.TextField(blank=True, null=True)
    date = models.DateField()
    image = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return f'{self.title} - {self.author}'
