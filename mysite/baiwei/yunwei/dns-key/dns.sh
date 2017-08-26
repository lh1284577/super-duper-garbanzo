#!/bin/bash
FUN=$1
dns_server=$2
KEY_FILE=$3
DNS=$4
IP=$5
keydir=/data/mysite/baiwei/yunwei/dns-key
date=`date "+%Y-%m-%d:%H:%M:%S"`
dnslog=/data/baiwei/deploy/log/dns_deploy.log
option=$6

if [ "${KEY_FILE}" == "qa.51eparty.com" ]
then
	SIP=10.10.101.67
elif [ "${KEY_FILE}" == "qa.joindata.com" ]
then
	SIP=10.10.5.2
elif [ "${KEY_FILE}" == "pipixia.run" ]
then
	SIP=10.10.110.50
fi

DNS="$DNS.${KEY_FILE}"


if [ -z "$1" ]
then 

                echo "Usage: \$1 {add|delete}"
                exit 1
else
                if [ "$1" = "add" -a  $# -ne 6 ]
                then
                        echo "Usage: \$1 {add} \$2 {dns_server}  \$3 {KEY_FILE}  \$4 {dnsname}  \$5 {IP} \$6 {option}"
                        exit 1
                elif [ "$1" = "delete" -a  $# -lt 4 ]
                then
                        echo "Usage: \$1 {delete} \2 {dns_server}  \$3 {KEY_FILE}  \$4 {dnsname}"
                        exit 1
                fi

fi






for DNS_SERVER in `echo $dns_server |sed 's/,/ /'`
do




echo >/tmp/dns_add_temp.log
cat >/tmp/dns_add_temp.log <<EOF
server $DNS_SERVER
update $FUN  $DNS  86400  $option  $IP
send
show
quit
EOF

echo >/tmp/dns_delete_temp.log
cat >/tmp/dns_delete_temp.log <<EOF
server $DNS_SERVER
update $FUN  $DNS  $option
send
quit
EOF

if [ $FUN = "add" ]
then
nslookup << EOF >/dev/null
server  $DNS_SERVER
$DNS
exit
EOF

if [ $? -eq 0  -a "$SIP" == $IP ]
then
	echo ""
	echo -e "$DNS \n\nDNS:$DNS_SERVER 解析已存在"
	break
fi

        nsupdate -k $keydir/$KEY_FILE -v /tmp/dns_add_temp.log 
	echo "$date $1 $2 $3 $4 $5 $6" >>$dnslog.tmp
	sort -r $dnslog.tmp >$dnslog
elif [ $FUN = "delete" ]
then

nslookup << EOF >/dev/null
server  $DNS_SERVER
$DNS
exit
EOF

if [ $? -ne 0 ]
then
	echo ""
	echo -e "$DNS \n\nDNS:$DNS_SERVER 解析并不存在"
	break
fi

        /usr/bin/nsupdate -k $keydir/$KEY_FILE -v /tmp/dns_delete_temp.log 
	echo "$date $1 $2 $3 $4 $5 $6" >>$dnslog.tmp
	sort -r $dnslog.tmp >$dnslog
fi

nslookup << EOF
server  $DNS_SERVER
$DNS
exit
EOF

done

