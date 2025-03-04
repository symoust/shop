from django.shortcuts import render
from django.http import HttpResponse
import os

from . import all_doc

os.system("CLS")
class Base:
    # definition de la page d'accueille
    def home(request):
        return render(request, "main/homep.html", {'ban': all_doc.preis[1],'ignam': all_doc.preis[3], 
               'piment': all_doc.preis[5], 'okra': all_doc.preis[7]})
    
    def gemuse(request):
        pk = 5
        return render(request, "main/gemuse.html", {'ban': all_doc.preis[1],'ignam': all_doc.preis[3], 
               'piment': all_doc.preis[5], 'okra': all_doc.preis[7]})
    
    def versand(request):
        return render(request, "main/versand.html", {})