from django.http import HttpResponse

def index(request):
    line='<h1 style ="text-align: center">Hello 冷胜洁！</h1>'
    line2='<img src="https://tse1-mm.cn.bing.net/th/id/R-C.3adc1c7196014ddd94c716ad53bc45c2?rik=P4qXTa1rjlKBfA&riu=http%3a%2f%2fimg.wxcha.com%2fm00%2f22%2f81%2fe9a0dd40a1b7673142b9e5eb54615ab5.jpg%3fdown&ehk=4dxlBVRcqlyxUzy8P52%2bnpHs4TnvDYVCBJv33CnKqWc%3d&risl=&pid=ImgRaw&r=0">'
    return HttpResponse(line + line2)



