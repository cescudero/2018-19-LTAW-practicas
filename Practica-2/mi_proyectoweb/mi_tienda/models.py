# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Zapatillas_Nike (models.Model):
    name = models.CharField('Modelo',max_length=200)
    brand =models.CharField('Marca',max_length=200)
    color = models.CharField('Color',max_length=200)
    image = models.ImageField(upload_to='static', default = 0)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.name


class Zapatillas_Adidas (models.Model):
    name = models.CharField('Modelo',max_length=200)
    brand =models.CharField('Marca',max_length=200)
    color = models.CharField('Color',max_length=200)
    image = models.ImageField(upload_to='static', default = 0)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.name



class Zapatillas_Converse (models.Model):
    name = models.CharField('Modelo',max_length=200)
    brand =models.CharField('Marca',max_length=200)
    color = models.CharField('Color',max_length=200)
    image = models.ImageField(upload_to='static', default = 0)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.name
