LOAD DATA
INFILE 'majestic.csv'
APPEND INTO TABLE majestic_index3
FIELDS TERMINATED BY ','
TRAILING NULLCOLS
(GlobalRank,TldRank,Domain,TLD,RefSubNets,RefIPs,IDN_Domain,IDN_TLD,PrevGlobalRank,PrevTldRank,PrevRefSubNets,PrevRefIPs)

