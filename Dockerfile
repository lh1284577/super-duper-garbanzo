#FROM lh1284577/django:20170825
#ADD mysite.tar.gz /data
#ADD mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf 
#RUN pip install Pillow

FROM mysql
ADD mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf
