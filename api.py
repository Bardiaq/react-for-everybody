import json
from rest_framework.decorators import api_view
from django.http import HttpResponse




@api_view()
def getproducts(request):
   list= {
   "cn":[{"name":"lap tob","number":3,"id":1},{"name":"Iphone","number":1,"id":2},{"name":"Television","number":1,"id":3},{"name":"samsung A12","number":1,"id":6}],
   "hc":[{"name":"lap tob","y":3},{"name":"Iphone","y":1},{"name":"Televisions","y":1},{"name":"samsung A12","y":1}]

   }





   return HttpResponse(json.dumps(list,default=lambda o:o.__dict__),content_type="application/json")
