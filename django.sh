#!/bin/bash
apt-get update
apt-get install gcc make -y
cd /
python ez_setup.py
cd /Python-2.7.7
mkdir /usr/local/python27
./configure --prefix=/usr/local/python27 && make && make install 
ln -s /usr/local/python27/bin/python /usr/bin/python

cd /MySQL-python-1.2.3
python setup.py build
python setup.py install
cd /Django-1.9.13
python setup.py install
