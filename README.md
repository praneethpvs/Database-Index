# Database-Index

Part one: Schema creation and Data loading part:

a) If table are already present then run (clean_data.sql) in sqlldr
b) Run majestic_schema.sql file to create the schema/table.
c) TO load the data in to the table need to run (load_data.sh) file
   first make it executable using chmod +x load_data.sh
    then (./load_data.sh <username> <password>)

Then in my case below time is being taken by follwing table


Table MAJESTIC:
  1000000 Rows successfully loaded.

Check the log file:
  load_majestic.log
for more information about the load.
19 seconds        (it is time taken)


Table MAJESTIC_INDEX1:
  1000000 Rows successfully loaded.

Check the log file:
  load_majestic_index1.log
for more information about the load.
29 seconds        (it is time taken)


Table MAJESTIC_INDEX2:
  1000000 Rows successfully loaded.

Check the log file:
  load_majestic_index2.log
for more information about the load.
23 seconds        (it is time taken)


Table MAJESTIC_INDEX3:
  1000000 Rows successfully loaded.

Check the log file:
  load_majestic_index3.log
for more information about the load.
31 seconds        (it is time taken)



D)   EXECUTING QUERY TIMING

first write "  set timing on"

then execute query

for sql "@Assigment3/query_india_domains"


Majestic
3084 rows selected.

Elapsed: 00:00:00.12

Majestic_Index1

3084 rows selected.

Elapsed: 00:00:00.07


Majestic_Index2
3084 rows selected.

Elapsed: 00:00:00.11

Majestic_Index3

3084 rows selected.

Elapsed: 00:00:00.06

--------------------------------------------------

For sql  "@Assigment3/query_top_domains"

Majestic

62 rows selected.

Elapsed: 00:00:00.06

Majestic_Index1

62 rows selected.

Elapsed: 00:00:00.41

Majestic_Index2

62 rows selected.

Elapsed: 00:00:00.01


Majestic_Index3

62 rows selected.

Elapsed: 00:00:01.17
------------------------------------

For sql query @Assigment3/query_wikipedia

Majestic

GLOBALRANK
----------
         7

Elapsed: 00:00:00.06


Majestic_Index1
GLOBALRANK
----------
         7

Elapsed: 00:00:00.09

Majestic_Index2
GLOBALRANK
----------
         7

Majestic_Index3
Elapsed: 00:00:00.05

GLOBALRANK
----------
         7

Elapsed: 00:00:00.08

-----------------------------------------------------------------------

Part two: Node js programming with web:

In order to start first run below command

Step 1:First install the all the require NPM module 

npm install mustachex
npm install express
npm install body-parser
npm install oracledb

Step 2: Run the export.sh file to import the all the required path

TO make it executable CHMODE +x export.sh
RUN :  ./export.sh


a) Then           node majestic.js <username> <password> <port>
once port 6363 is running then below are the url to check the following qurey:

 b) To find out the ranking of the domain:

example : input : facebook.com
output:  Global Rank: 2
         Domain: facebook.com

For no index i,e majestic:   http://csgrads1.utdallas.edu:6363/domain/no_idx
For majestic index1      :   http://csgrads1.utdallas.edu:6363/domain/idx1
For majestic index2      :   http://csgrads1.utdallas.edu:6363/domain/idx3
For majestic index3      :   http://csgrads1.utdallas.edu:6363/domain/idx3



c) To find out the all the TLD belongs to certain Domain:

For no index i,e majestic:   http://csgrads1.utdallas.edu:6363/tld/no_idx
For majestic index1      :   http://csgrads1.utdallas.edu:6363/tld/idx1
For majestic index2      :   http://csgrads1.utdallas.edu:6363/tld/idx3
For majestic index3      :   http://csgrads1.utdallas.edu:6363/tld/idx3

If user input the incorrect input or something went wrong the corresponding error page will be displayed.

No Domain with such name in MAJESTIC
No Domain with such name in MAJESTIC_INDEX1
No Domain with such name in MAJESTIC_INDEX2
No Domain with such name in MAJESTIC_INDEX3

Invalid Entry for TLD

d)


Same thing can be done for Majestic2.js file.

___________________________________________________________________
Part3:
___________________________________________________________________

Curl_testing

Below commands are present in query1_curl, and query2_curl files and to run all the below query at the same you need to run these two files
.Before running you might need to make it executable.


Before executing this first run the majestic.js file in one putty session and then you need to open another putty session to run the below commands to
see the result.

time curl --data "tld=in" http://csgrads1.utdallas.edu:6363/search_no_idx

real    0m0.217s
user    0m0.003s
sys     0m0.002s

time curl --data "tld=in" http://csgrads1.utdallas.edu:6363/search_idx1

real    0m0.209s
user    0m0.003s
sys     0m0.002s

time curl --data "tld=in" http://csgrads1.utdallas.edu:6363/search_idx2
real    0m0.218s
user    0m0.001s
sys     0m0.004s

time curl --data "tld=in" http://csgrads1.utdallas.edu:6363/search_idx3

real    0m0.588s
user    0m0.002s
sys     0m0.003s


CURL testing for tld query

Type below command: and will get result

time curl --data "tld=in" http://csgrads1.utdallas.edu:6363/search_tld_no_idx

real    0m0.229s
user    0m0.002s
sys     0m0.004s


time curl --data "tld=in" http://csgrads1.utdallas.edu:6363/search_tld_idx1
real    0m0.166s
user    0m0.002s
sys     0m0.004s

time curl --data "tld=in" http://csgrads1.utdallas.edu:6363/search_tld_idx2

real    0m0.168s
user    0m0.002s
sys     0m0.003s

time curl --data "tld=in" http://csgrads1.utdallas.edu:6363/search_tld_idx3

real    0m0.166s
user    0m0.001s
sys     0m0.004s


_____________________-



Apache JMeter Testing:



There are two js files :

1. Majestic.js

2. Majestic2.js (with implementation of ORAWRAP)

Name of the test plan = mentions the JMX file name of our test plan.

Result Tab = mentions the name of the result tab in Jmeter_result.xlsx.

Name of the test plan     Result Tab

domain_no_idx.jmx       Query_1_no_idx

indomain_idx1.jmx       Query_1_idx1

domain_idx2.jmx         Query_1_idx2

domain_idx3.jmx         Query_1_idx3

tld_no_idx.jmx          Query_2_no_idx

tld_idx1.jmx            Query_2_idx1

tld_idx2.jmx            Query_2_idx2

tld_idx3.jmx            Query_2_idx3

NOTE: After allexamination of Jmeter test plan, we observe that the Jmeter Test Output in 

“Majestic.js” has large values for maximum time taken as compared to “Majestic2.js”.

Also we see throughput decreased significantly for Jmeter Test with implementation of module  Orawrap.

So with implementation of Orawrap will help us handle more concurrent user at the same time and it 
provides optimized solution.

