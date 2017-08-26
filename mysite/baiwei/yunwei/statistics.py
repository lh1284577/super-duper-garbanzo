#coding=utf-8
import re
import datetime,time,os,commands


def listdisplay(timestring):
        d2 = datetime.datetime(int(timestring.split('-')[0].split('/')[2]),int(timestring.split('-')[0].split('/')[0]),int(timestring.split('-')[0].split('/')[1]))
        d1 = datetime.datetime(int(timestring.split('-')[1].split('/')[2]),int(timestring.split('-')[1].split('/')[0]),int(timestring.split('-')[1].split('/')[1]))
        d1 += datetime.timedelta(days = 1)
        os.system("bash /data/mysite/baiwei/yunwei/statstics.sh %s %s" % (d2.strftime('%Y%m%d'),d1.strftime('%Y%m%d')))
        length = 0
        listarray = []
        nf = open('/data/mysite/baiwei/yunwei/test.txt','r')
        for item in nf.xreadlines(): 
                listarray.append(item.split())
	nf.close()
	DATA = ""
	for item in listarray:
		if len(item) == 7:
			DATA = DATA + "<tr><th>%s</th><th>%s</th><th>%s</th><th>%s</th><th>%s</th><th>%s</th><th>%s</th></tr>" % (item[0],item[1],item[2],item[3],item[4],item[5],item[6])
	

def logdisplay(timerparameter):
	d2 = datetime.datetime(int(timerparameter.split('-')[0].split('/')[2]),int(timerparameter.split('-')[0].split('/')[0]),int(timerparameter.split('-')[0].split('/')[1]))
        d1 = datetime.datetime(int(timerparameter.split('-')[1].split('/')[2]),int(timerparameter.split('-')[1].split('/')[0]),int(timerparameter.split('-')[1].split('/')[1]))
	d1 += datetime.timedelta(days = 1)
	os.system("bash /data/mysite/baiwei/yunwei/statstics.sh %s %s" % (d2.strftime('%Y%m%d'),d1.strftime('%Y%m%d')))
	xDay = (d1 - d2).days
        aDay = datetime.timedelta(days=1)
	item = 0
	start = d2
	#d2是小日期，d1是大日期
	dict = []
	nf = open('/data/mysite/baiwei/yunwei/test.txt','r')
	while(item <= xDay):
		for line in nf.xreadlines():
			#print start.strftime("%Y%m%d"),"++++++++++++++++++++++++++++++"
			if re.match(start.strftime("%Y%m%d"),line):
				dict.append(line.split(' '))
			#	print dict
		start = start + aDay
		item = item + 1
		nf.seek(0)#readlines指针回到开头的地方，否则出错
	return dict

#print logdisplay('07/13/2017 - 07/13/2017')
