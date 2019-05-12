// Reactor Variables
var Reactor_Heat = 5000;
var Reactor_Power = 0;
var Money = 100;
var Power_Cells = 1;
var Reactor_Towers = 0;
var Reactor_Clusters = 0;
var Employees = 1;
var SleepingHalls = 1;
var Uranium = 0;
var Plutonium = 0;
var Plans = 1;

function test (value) {
  var suffixes = ['', 'K', 'M', 'B', 'T', 'A', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'B', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BX', 'BY', 'C', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CW', 'CX', 'CY', 'D', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DI', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ', 'DR', 'DS', 'DT', 'DU', 'DV', 'DW', 'DX', 'DY', 'E', 'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EI', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EO', 'EP', 'EQ', 'ER', 'ES', 'ET', 'EU', 'EV', 'EW', 'EX', 'EY', 'F', 'FA', 'FB', 'FC', 'FD', 'FE', 'FF', 'FG', 'FH', 'FI', 'FJ', 'FK', 'FL', 'FM', 'FN', 'FO', 'FP', 'FQ', 'FR', 'FS', 'FT', 'FU', 'FV', 'FW', 'FX', 'FY', 'G', 'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GJ', 'GK', 'GL', 'GM', 'GN', 'GO', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GV', 'GW', 'GX', 'GY', 'H', 'HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HH', 'HI', 'HJ', 'HK', 'HL', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS', 'HT', 'HU', 'HV', 'HW', 'HX', 'HY', 'I', 'IA', 'IB', 'IC', 'ID', 'IE', 'IF', 'IG', 'IH', 'II', 'IJ', 'IK', 'IL', 'IM', 'IN', 'IO', 'IP', 'IQ', 'IR', 'IS', 'IT', 'IU', 'IV', 'IW', 'IX', 'IY', 'J', 'JA', 'JB', 'JC', 'JD', 'JE', 'JF', 'JG', 'JH', 'JI', 'JJ', 'JK', 'JL', 'JM', 'JN', 'JO', 'JP', 'JQ', 'JR', 'JS', 'JT', 'JU', 'JV', 'JW', 'JX', 'JY', 'K', 'KA', 'KB', 'KC', 'KD', 'KE', 'KF', 'KG', 'KH', 'KI', 'KJ', 'KK', 'KL', 'KM', 'KN', 'KO', 'KP', 'KQ', 'KR', 'KS', 'KT', 'KU', 'KV', 'KW', 'KX', 'KY', 'L', 'LA', 'LB', 'LC', 'LD', 'LE', 'LF', 'LG', 'LH', 'LI', 'LJ', 'LK', 'LL', 'LM', 'LN', 'LO', 'LP', 'LQ', 'LR', 'LS', 'LT', 'LU', 'LV', 'LW', 'LX', 'LY', 'M', 'MA', 'MB', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MI', 'MJ', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'N', 'NA', 'NB', 'NC', 'ND', 'NE', 'NF', 'NG', 'NH', 'NI', 'NJ', 'NK', 'NL', 'NM', 'NN', 'NO', 'NP', 'NQ', 'NR', 'NS', 'NT', 'NU', 'NV', 'NW', 'NX', 'NY', 'O', 'OA', 'OB', 'OC', 'OD', 'OE', 'OF', 'OG', 'OH', 'OI', 'OJ', 'OK', 'OL', 'OM', 'ON', 'OO', 'OP', 'OQ', 'OR', 'OS', 'OT', 'OU', 'OV', 'OW', 'OX', 'OY', 'P', 'PA', 'PB', 'PC', 'PD', 'PE', 'PF', 'PG', 'PH', 'PI', 'PJ', 'PK', 'PL', 'PM', 'PN', 'PO', 'PP', 'PQ', 'PR', 'PS', 'PT', 'PU', 'PV', 'PW', 'PX', 'PY', 'Q', 'QA', 'QB', 'QC', 'QD', 'QE', 'QF', 'QG', 'QH', 'QI', 'QJ', 'QK', 'QL', 'QM', 'QN', 'QO', 'QP', 'QQ', 'QR', 'QS', 'QT', 'QU', 'QV', 'QW', 'QX', 'QY', 'R', 'RA', 'RB', 'RC', 'RD', 'RE', 'RF', 'RG', 'RH', 'RI', 'RJ', 'RK', 'RL', 'RM', 'RN', 'RO', 'RP', 'RQ', 'RR', 'RS', 'RT', 'RU', 'RV', 'RW', 'RX', 'RY', 'S', 'SA', 'SB', 'SC', 'SD', 'SE', 'SF', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SP', 'SQ', 'SR', 'SS', 'ST', 'SU', 'SV', 'SW', 'SX', 'SY', 'T', 'TA', 'TB', 'TC', 'TD', 'TE'];
  var suffixNum = Math.floor((""+value).length/3);
  var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(1));
  if (shortValue % 1 != 0) {
      var shortNum = shortValue.toFixed(1);
  }
  return shortValue+suffixes[suffixNum];
}

document.getElementById("Money").innerHTML = 'Money: $'+ test(Money);
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
document.getElementById("Plan").innerHTML = 'Reactor Plans: '+ Plans;
setInterval(function(){autoconvert()}, 100);
convert = function convert(){

Reactor_Power = (Reactor_Power + (1*Power_Cells))+((Employees+1)*10);
Reactor_Heat = Reactor_Heat + Math.round(Power_Cells/2);
Power_Cells = Power_Cells + Math.floor((Reactor_Towers*1.5))
Reactor_Towers = Reactor_Towers + (Reactor_Clusters*100)
// Overheat:
if(Reactor_Heat > Power_Cells*100){
Money = Money/2
}
document.getElementById("Money").innerHTML = 'Money: $'+ test(Money);
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
  
console.log(Reactor_Power)
}
//Auto Convert

autoconvert = function autoconvert(){

Reactor_Power = Reactor_Power + (1*Power_Cells);
Reactor_Heat = Reactor_Heat + Math.round((Power_Cells/2)/SleepingHalls);
tower()
cluster()
Money = Money - (Math.round(Employees*(Power_Cells/3))/SleepingHalls)
if(Money < 1){
 Employees = 0 
}
// Overheat:
if(Reactor_Heat > Power_Cells*100){
sell()

}
document.getElementById("Money").innerHTML = 'Money: $'+ test(Money);
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
console.log(Reactor_Power)
}


sell = function sell(){
Money = Money + Reactor_Power
Reactor_Power = 0
Reactor_Heat = Math.round(Reactor_Heat/2)
document.getElementById("Money").innerHTML = 'Money: $'+ test(Money);
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}
cell = function cell(){

if(Money >= (Power_Cells*((45/100)*100))){
  Money = Money - (Power_Cells*((45/100)*100));
  Power_Cells = Power_Cells + 1;
}
document.getElementById("Money").innerHTML = 'Money: $'+ test(Money);
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}
tower = function tower(){
  if(Power_Cells > 14){
    Reactor_Towers = Reactor_Towers + 1;
    Power_Cells = Power_Cells - 15;
  }
document.getElementById("Money").innerHTML = 'Money: $'+ test(Money);
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;

}

cluster = function cluster(){
  if(Reactor_Towers > 99){
  Reactor_Clusters = Reactor_Clusters + 1*Plans
  Reactor_Towers = Reactor_Towers - 100
  
  
  }
document.getElementById("Money").innerHTML = 'Money: $'+ test(Money);
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}
function addheat(x){
heat = heat + x

}
function employee(){
 Employees = Employees + 1 
  document.getElementById("Money").innerHTML = 'Money: $'+ test(Money);
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}
function hall(){
  if (Money > 1999) {
    SleepingHalls = SleepingHalls + 1
    Money = Money - 10000
  }
  document.getElementById("Money").innerHTML = 'Money: $'+ test(Money);
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}


function plutonium(){

  if (Uranium > 19){
    Plutonium = Plutonium + 1
    Uranium = Uranium - 20
    document.getElementById("uran").innerHTML = 'Uranium: '+ Uranium;
    document.getElementById("pluto").innerHTML = 'Thorium: '+ Plutonium;
}
  
  document.getElementById("Money").innerHTML = 'Money: $'+ test(Money);
  document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
  document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
  document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
  document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
  document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
    document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
    document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}

function uranium(){

  if (Reactor_Clusters > 9999){
    Uranium = Uranium + 1
    Reactor_Clusters = Reactor_Clusters - 10000
    document.getElementById("uran").innerHTML = 'Uranium: '+ Uranium;
  }
  document.getElementById("Money").innerHTML = 'Money: $'+ test(Money);
  document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
  document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
  document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
  document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
  document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
    document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
    document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
    

}



