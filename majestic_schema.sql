create table MAJESTIC(
GlobalRank int,
TldRank int,
Domain varchar(200),
TLD varchar(50),
RefSubnets numeric(30),
RefIPs numeric(30),
IDN_Domain varchar(200),
IDN_TLD varchar(30),
PrevGlobalRank int,
PrevTldRank int,
PrevRefSubNets numeric(30),
PrevRefIPs numeric(30),
Primary Key(GlobalRank)
);

create table MAJESTIC_INDEX1(
GlobalRank int,
TldRank int,
Domain varchar(200),
TLD varchar(50),
RefSubnets numeric(30),
RefIPs numeric(30),
IDN_Domain varchar(200),
IDN_TLD varchar(30),
PrevGlobalRank int,
PrevTldRank int,
PrevRefSubNets numeric(30),
PrevRefIPs numeric(30),
Primary Key(GlobalRank)
);

create table MAJESTIC_INDEX2(
GlobalRank int,
TldRank int,
Domain varchar(200),
TLD varchar(50),
RefSubnets numeric(30),
RefIPs numeric(30),
IDN_Domain varchar(200),
IDN_TLD varchar(30),
PrevGlobalRank int,
PrevTldRank int,
PrevRefSubNets numeric(30),
PrevRefIPs numeric(30),
Primary Key(GlobalRank)
);

create table MAJESTIC_INDEX3(
GlobalRank int,
TldRank int,
Domain varchar(200),
TLD varchar(50),
RefSubnets numeric(30),
RefIPs numeric(30),
IDN_Domain varchar(200),
IDN_TLD varchar(30),
PrevGlobalRank int,
PrevTldRank int,
PrevRefSubNets numeric(30),
PrevRefIPs numeric(30),
Primary Key(GlobalRank)
);


Create Index TLD_Majextic_Index1
on MAJESTIC_INDEX1(TLD);

Create Index RefSubnets_Majextic_Index2
on MAJESTIC_INDEX2(RefSubnets);

Create Index TLD_RefIPs_Majextic_Index3
on MAJESTIC_INDEX3(TLD,RefIPs);

