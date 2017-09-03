#!/bin/bash
#timestring="06/01/2016 - 06/20/2016"
start=$1
stop=$2
>/home/lihao/mysite/admin/test.txt

scp 172.24.138.79:/data/postmall/deploy/logs/maven/*_deploy.log /tmp
awk -v start=$start -v stop=$stop '($1> start && $1< stop ){print }' /tmp/tomcat_deploy.log  | sort -r | awk '{printf $1" "}{for (x=2;x<=NF;x++){ printf $x"#"}{print ""}}' | while read a b
do
	b=`echo  "$b"|sed 's/#/ /g'`
	item=`grep "$b" test.txt|wc -l`
	if [ $item -eq 0 ];then
		echo "$a $b" >>/home/lihao/mysite/admin/test.txt
	fi  
done

awk -v start=$start -v stop=$stop '($1> start && $1< stop ){print }' /tmp/jboss_deploy.log  | sort -r | awk '{printf $1" "}{for (x=2;x<=NF;x++){ printf $x"#"}{print ""}}' | while read a b
do
	b=`echo  "$b"|sed 's/#/ /g'`
	item=`grep "$b" test.txt|wc -l`
	if [ $item -eq 0 ]
	then
		echo "$a $b" >>/home/lihao/mysite/admin/test.txt
	fi  
done
awk -v start=$start -v stop=$stop '($1> start && $1< stop ){print }' /tmp/timer_deploy.log  | sort -r | awk '{printf $1" "}{for (x=2;x<=NF;x++){ printf $x"#"}{print ""}}' | while read c d
do
	d=`echo  "$d"|sed 's/#/ /g'`
	item=`grep "$d" test.txt|wc -l`
	if [ $item -eq 0 ]
	then
		echo "$c $d" >>/home/lihao/mysite/admin/test.txt
	fi  
done



rm -f /tmp/*_deploy.log
