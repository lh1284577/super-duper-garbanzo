<?php
    	$timer=$_GET["timer"];
	$server=$_GET["server"];
	if ($server == "prd") {
    	system("ssh 172.24.138.79 bash /data/postmall/lihao/deploy_data_timer.sh $timer |sed 's/^\([0-9]\{4\}\)\([0-9]\{2\}\)\([0-9]\{2\}\)\([0-9]\{2\}\)\([0-9]\{2\}\)\([0-9]\{2\}\)/\\1-\\2-\\3|\\4:\\5/'|sort -n >/data/postmall/lihao/deploy_data_timer.log");
	} else {
    	system("bash /data/postmall/lihao/deploy_data_timer.sh $timer |sed 's/^\([0-9]\{4\}\)\([0-9]\{2\}\)\([0-9]\{2\}\)\([0-9]\{2\}\)\([0-9]\{2\}\)\([0-9]\{2\}\)/\\1-\\2-\\3|\\4:\\5/'|sort -n >/data/postmall/lihao/deploy_data_timer.log");
	}
	$file = file('/data/postmall/lihao/deploy_data_timer.log');
	echo '<table border="1"  cellpadding="4"  cellspacing="0">';
	echo  "<td>ID</td><td>时间</td> <td>模块</td> <td>应用</td> <td>环境</td> <td>容器</td> <td>包版本</td> <td>状态</td> ";            
	$count=1;
	foreach ($file as $k=> $v) { 
   		$arr  = preg_split('/[ ]+/', trim($v));
    		echo  "<tr>";
    		echo  "<td>$count</td><td>$arr[0]</td> <td>$arr[1]</td> <td>$arr[2]</td> <td>$arr[3]</td> <td>$arr[4]</td> <td>$arr[5]</td> <td>$arr[6]</td>";            
    		echo  "</tr>";
    		$count+=1;
	}

	echo "</table>";
?>
