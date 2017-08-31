starttime=$(date +'%s')
$ORACLE_HOME/bin/sqlldr $1/$2 control=load_majestic.ctl
endtime=$(date +'%s')
echo "$((endtime - starttime)) seconds"
sleep 10
starttime=$(date +'%s')
$ORACLE_HOME/bin/sqlldr $1/$2 control=load_majestic_index1.ctl
endtime=$(date +'%s')
echo "$((endtime - starttime)) seconds"
sleep 10

starttime=$(date +'%s')
$ORACLE_HOME/bin/sqlldr $1/$2 control=load_majestic_index2.ctl
endtime=$(date +'%s')
echo "$((endtime - starttime)) seconds"
sleep 10

starttime=$(date +'%s')
$ORACLE_HOME/bin/sqlldr $1/$2 control=load_majestic_index3.ctl
endtime=$(date +'%s')
echo "$((endtime - starttime)) seconds"



