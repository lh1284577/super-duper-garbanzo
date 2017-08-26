#!/bin/bash
#passwd='root'
#/usr/bin/expect <<-EOF
#set timeout -1
#spawn apt-get install mysql-server -y
#expect {
#"MySQL \"root\" user:" { send "$passwd\r"; exp_continue }
#"MySQL \"root\" user:" { send "$passwd\r" }
#}
#EOF
/etc/init.d/mysql start
sleep 5
python /data/mysite/baiwei/manage.py runserver 0.0.0.0:8000 2>&1 > nohup.out &
