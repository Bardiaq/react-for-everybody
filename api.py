import json
import pyodbc
from django.http import HttpResponse
# from restframework.decorators import api_view
# @api_view(['POST'])

def test(request):
    connection = pyodbc.connect(
        'DRIVER={ODBC Driver 17 for SQL Server};SERVER=.;DATABASE=emamyari;UID=sa;PWD=111')
    cursor = connection.cursor()
    print(request.GET['mahsool'])
    p=request.GET['mahsool']
    cursor.execute("select * from person")

    rows=cursor.fetchall()

    list=[]
    for row in rows:
        obj=person(row[0],row[1],row[2])
        list.append(obj.__dict__)
    return HttpResponse(json.dumps(list), content_type='application/json')

class person():
    def __init__(self,name,family,nc):
        self.name=name
        self.family=family
        self.nc=nc


class priceHistory():
    def __init__(self,Pdate,Price):
        self.Pdate=Pdate
        self.Price=Price

def test2(request):
    connection = pyodbc.connect(
        'DRIVER={ODBC Driver 17 for SQL Server};SERVER=46.34.161.23,13433;DATABASE=dbTest;UID=sa;PWD=111@a')
    cursor = connection.cursor()

    cursor.execute("select * from PriceHistory")

    rows=cursor.fetchall()

    list=[]
    for row in rows:
        list.append([row[1],row[2]])
    return HttpResponse(json.dumps(list), content_type='application/json')

def test3(request):
    a={'name':'نمره',
       'data': [10, 15, 12, 16, 18, 15, 20, 10]
    }
    list=[a]
    return HttpResponse(json.dumps(list), content_type='application/json')
def test4(request):
    list=  {
             "cn":[{"name":1,"family":"ali","nc":123}],
             "hc": [ {"name": 'QQ',"y": 1.2}, {'name': 'Other',"y": 2.61}]
            }
    return HttpResponse(json.dumps(list), content_type='application/json')


