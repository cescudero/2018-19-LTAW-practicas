# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from mi_tienda.models import Zapatillas_Nike

from mi_tienda.models import Zapatillas_Adidas

from mi_tienda.models import Zapatillas_Converse
# Create your views here.
def home_view (request):
    return render(request, "index.html", {})


def Nike(request):
    todo_nike = Zapatillas_Nike.objects.all()
    return render(request, "plantilla.html", {'objetos': todo_nike})

def Adidas(request):
    todo_adidas = Zapatillas_Adidas.objects.all()
    return render(request, "plantilla.html", {'objetos': todo_adidas})

def Converse(request):
    todo_converse = Zapatillas_Converse.objects.all()
    return render(request, "plantilla.html", {'objetos': todo_converse})

def Vans(request):
    todo_converse = Zapatillas_Converse.objects.all()
    return render(request, "plantilla.html", {'objetos': todo_converse})
