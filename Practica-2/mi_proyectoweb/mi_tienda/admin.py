# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from mi_tienda.models import Zapatillas_Nike
from mi_tienda.models import Zapatillas_Adidas
from mi_tienda.models import Zapatillas_Converse

# Register your models here.
admin.site.register(Zapatillas_Nike)
admin.site.register(Zapatillas_Adidas)
admin.site.register(Zapatillas_Converse)
