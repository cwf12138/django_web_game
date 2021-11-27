from django.http import HttpResponse

def index(request):
    line='<h1 style ="text-align: center">Hello 冷胜洁！</h1>'
    line2='<img src="https://tse1-mm.cn.bing.net/th/id/R-C.3adc1c7196014ddd94c716ad53bc45c2?rik=P4qXTa1rjlKBfA&riu=http%3a%2f%2fimg.wxcha.com%2fm00%2f22%2f81%2fe9a0dd40a1b7673142b9e5eb54615ab5.jpg%3fdown&ehk=4dxlBVRcqlyxUzy8P52%2bnpHs4TnvDYVCBJv33CnKqWc%3d&risl=&pid=ImgRaw&r=0" width =1000>'
    line3='<a href ="/hello/"> 打招呼 </a>'
    return HttpResponse(line + line3 + line2)

def hello(requests):
    line1='<h1 style ="text-align: center"> hello nihao </h1>'
    line2='<img src="https://tse1-mm.cn.bing.net/th/id/R-C.9947ed26c885496315b7b36229f44c52?rik=wmx8pmbS%2fwQ4EQ&riu=http%3a%2f%2fup.keaitupian.com%2fpic%2f50%2f5b%2fc7%2f505bc781264ce321c858c4a9efa8740c.jpg&ehk=l3yrOt5F5eqBzcdhA7moJWTKo2%2f7OkBi8DyIuMjZTWw%3d&risl=&pid=ImgRaw&r=0">'
    line3='<a href ="/"> fuanhui </a>'
    return HttpResponse(line1+line3+line2)




