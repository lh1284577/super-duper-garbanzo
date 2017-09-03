# -*- coding: utf8 -*-
import sys
from pywebsocketserver.server import SocketServer
from pywebsocketserver.baseio import BaseIO
import httplib,urllib

class MyIO(BaseIO):
    def onData(self,uid,text):
        try:
            httpClient = httplib.HTTPConnection('172.24.147.240', 8000, timeout=30)
            httpClient.request('GET', '/admin/CALLBACK')
            response = httpClient.getresponse()
	    self.sendData(uid,response.read())
        except Exception, e:
            print e
        finally:
            if httpClient:
                httpClient.close()
	
    def Oracle(self,uid,text):
        try:
            httpClient = httplib.HTTPConnection('172.24.147.240', 8000, timeout=30)
            httpClient.request('GET', '/admin/CALLBACK')
            response = httpClient.getresponse()
	    self.sendData(uid,response.read())
        except Exception, e:
            print e
        finally:
            if httpClient:
                httpClient.close()
	
	



    def onConnect(self,uid):
        #self.sendData(uid,"你已经成功连接上我了！")
	pass


try:
    port = sys.argv[1]
except:
    port = 81

port = int(port)
myIo = MyIO()
SocketServer(port,myIo).run()    
