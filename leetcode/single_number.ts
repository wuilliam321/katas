function singleNumber(nums: number[]): number {
  nums.sort();

  while(nums.length) {
    const [a, b] = nums.splice(0, 2);
    if (b === undefined || a !== b) {
      return a;
    }
  }
  return nums[0];
};
console.log(singleNumber([1054,-663,-399,-44,400,40,958,-895,-550,1216,1976,-908,-122,466,-740,1861,1837,1269,-577,1044,768,-896,845,-236,398,921,256,1941,1435,366,1462,-833,0,900,778,782,1362,16,-3,1688,-470,-892,1303,1316,-915,417,-838,853,-192,613,1757,1784,1262,-44,-306,528,364,-681,386,-591,1603,1591,740,-981,1797,836,1425,-431,681,1902,-518,1624,165,809,1024,627,589,-915,149,1553,1922,686,-109,1151,448,-975,707,1838,1964,-681,-789,1323,1733,-621,-283,615,-356,-786,881,-848,553,-399,-781,796,1634,464,1820,146,1604,-715,1402,1146,244,802,-432,345,1510,-67,1348,285,1105,1349,-594,1761,1463,1097,-761,1454,900,-666,1888,892,165,-100,137,-556,1625,366,-378,1205,649,-575,-807,-948,1958,322,315,-917,722,163,-506,-358,117,1506,726,-556,655,1431,1134,345,1678,741,-511,-132,1776,226,1068,-190,1585,1187,1301,1700,1242,-704,-429,1756,148,387,364,-542,-212,697,207,1300,1820,-231,425,1459,944,-216,288,1066,1801,-780,-879,992,-264,1148,-410,-988,645,741,-233,830,676,-684,723,994,343,1635,895,1377,1506,-190,1847,1293,307,1492,1979,-376,-863,93,1753,-779,860,786,1619,1171,-263,1578,655,-242,-306,-18,1581,385,978,-594,-855,-701,-857,1197,1510,517,1263,-90,-3,-177,-84,1768,916,1751,192,-823,974,1292,1818,940,657,-40,1211,-997,-117,-353,1921,515,208,-659,1558,-416,-422,-911,195,1692,-212,1132,566,1604,-870,1134,-313,1583,176,-38,-920,319,896,-576,549,1223,1258,429,1268,806,1114,578,42,-665,1969,-845,814,1982,-200,82,962,1388,1132,1954,1655,1413,269,1536,-782,1961,819,-874,1227,1835,1247,194,549,160,1570,1155,-955,-781,1750,1143,-735,1177,1208,-706,-561,-751,642,305,889,717,1684,1874,1817,1613,74,135,1513,-779,52,1233,1796,-518,587,-549,1720,-13,48,-233,152,818,-497,-950,-651,-158,-122,-250,1639,-346,-653,1133,-677,508,551,1958,1116,1629,-427,1787,-359,746,10,-877,308,527,-878,1423,1951,1957,1536,-649,-200,457,-675,-516,-791,-981,654,1738,973,600,1202,-720,184,1404,-522,10,-394,1563,-202,961,1523,269,1375,-454,440,-908,-466,1138,536,-698,-410,1169,1217,1749,-808,-709,1619,-804,963,1779,563,-123,47,1368,264,1176,-95,354,-346,-317,1148,1955,-191,56,1235,1392,1097,-936,576,883,1049,1610,-38,377,-112,-46,837,-907,-77,-551,724,1759,973,-895,101,-921,-526,995,1411,1225,312,-68,-530,1888,1513,1216,866,-833,-841,-65,1265,-419,770,-148,337,-327,1,54,-983,1045,-359,1637,29,-975,-921,802,1226,1369,-511,807,-305,239,700,1594,1258,-378,-358,1625,1390,-493,-691,143,592,1750,-569,319,830,1407,172,1548,377,1234,693,580,-189,-612,1470,-274,1912,1184,1491,1583,1972,-565,963,1507,-877,-134,-972,1862,-540,273,1834,1119,-382,303,-203,305,1164,-936,790,-497,1169,1277,561,256,1125,-72,1021,1438,-369,1967,629,-665,1171,1064,578,1107,109,1582,1684,6,1901,1470,-919,334,-698,-997,1265,1167,1133,1338,337,1027,1778,1588,1818,-281,-808,-513,1527,629,177,868,714,-384,54,483,-95,1901,684,-495,417,1663,220,-10,56,1364,581,114,29,398,-457,-393,-683,1044,-192,736,1427,122,1982,1575,1233,1848,-35,1578,938,-538,1701,1871,104,722,624,1075,1612,942,-870,569,-22,1025,1312,-336,797,-191,349,1610,-486,1394,-402,1253,-325,-283,734,-539,-149,534,-341,907,1424,476,-253,-216,-540,200,877,-10,1869,317,1019,807,-213,122,625,659,944,-740,1977,1336,1002,149,229,-256,-458,-348,993,1460,631,-767,141,-41,1489,1338,-867,381,-402,675,1226,623,-940,1834,1373,1275,819,321,681,-477,1094,1137,877,-542,984,1140,682,1197,1588,-958,-919,1940,1293,-439,1895,1078,-584,-797,774,-77,-712,-75,-999,-135,1135,322,-912,1146,177,-530,600,-625,-134,583,976,833,449,1284,1402,1872,1254,83,563,-335,77,1994,-871,-645,1627,1114,801,1940,-966,-305,1547,146,386,866,340,640,1388,-336,394,-621,1870,1976,-677,-249,1275,1885,1806,1247,1540,940,759,921,-245,1720,-878,404,-614,464,480,749,1419,82,-439,958,426,576,1394,147,-189,-546,1917,1447,1866,1223,-18,1231,829,1627,-653,1038,450,640,659,-550,329,-1,1085,1773,104,458,1550,1777,736,-469,-98,-293,598,215,85,141,1835,255,-464,1746,878,806,938,-30,-477,389,546,-396,1187,188,770,-949,1763,1368,1623,-386,-202,724,676,225,381,-789,1854,-249,-82,624,343,-349,-651,1492,-787,1642,671,1523,397,307,1423,892,-780,1866,1211,239,-20,1848,995,335,484,1112,472,-859,-109,726,1205,613,617,1316,-896,1613,-505,-308,1694,734,-516,-683,-995,-41,1167,-132,359,1356,-925,-515,-438,1085,-585,677,251,-393,976,-672,-170,1131,17,490,1731,-384,-859,1263,-614,1768,1259,1636,-81,-770,1213,1064,-786,1234,335,92,-13,-239,-170,-481,859,657,1682,-528,-376,731,-267,541,-20,684,-64,-715,-800,1507,517,647,1582,1135,1979,978,309,255,109,-338,264,-277,-333,42,1552,-62,-35,-838,1459,-777,1236,883,696,1480,964,-983,1277,-898,1639,-814,1974,961,1996,1753,-289,1790,1143,1160,631,-515,1692,-248,127,1701,1063,1116,1372,-575,-67,1068,-620,1921,445,1537,1017,1694,-325,1629,397,1379,-593,1636,1501,-815,-236,1871,-577,-281,1463,1535,277,1294,485,23,628,-958,-924,508,329,-485,782,-457,-51,-156,354,956,1411,-19,-250,-814,593,1491,472,1854,73,-87,1996,696,1994,-135,225,-468,1837,773,779,1078,-561,-989,-972,-43,-911,224,143,1558,879,1870,1944,1035,1977,-923,790,1763,1153,1972,788,-782,180,990,-871,532,1019,643,801,1308,310,879,399,983,-706,-797,-564,677,-800,-415,1735,1509,192,351,1862,-139,1,-148,580,-609,1860,1235,923,1784,-533,-949,194,1624,176,836,93,-578,759,1438,1066,1069,1678,1697,74,1773,1184,598,-271,1396,303,1454,-253,1101,-811,1737,277,-89,-734,1885,942,1168,1192,1202,720,-242,1364,-688,686,1869,553,1392,643,-445,-625,628,-370,988,-428,-240,1723,-438,889,1101,-675,1740,-370,955,449,-923,796,-117,1151,-432,-533,581,-787,1778,1892,-404,-920,1504,1504,-203,292,-100,1278,487,-790,-156,213,155,1782,435,1954,1089,541,-360,1961,-742,-46,163,308,370,-951,-138,-679,-974,123,1447,-486,-661,-662,650,867,1327,-291,-123,-563,-513,1759,1144,1563,645,-129,-347,1556,-643,1918,1045,-490,-267,1566,-485,6,1738,-451,-386,-490,509,-948,-356,956,-354,1348,870,340,720,85,546,-578,527,-333,338,271,1472,-956,-264,-889,-19,84,1845,881,1489,1987,-454,-353,-425,1259,-271,-522,1284,-473,399,-560,-774,73,-790,-823,23,1918,1934,1637,1682,1621,1424,137,288,1603,1790,1547,1030,213,-289,776,1336,1509,-22,151,-563,903,947,-845,-415,17,-419,1176,-892,1063,-848,1017,-545,833,-754,992,450,826,-712,1390,1461,128,361,1723,-136,814,-505,1825,1404,394,440,993,604,853,1035,487,1002,1957,226,878,1025,-645,-666,768,1094,627,1432,160,1177,-966,1161,-284,-349,-341,1581,458,1292,1642,-815,1556,-539,1575,1922,-630,1731,1621,-974,-649,-560,1415,1383,77,778,-360,-506,1998,-87,-369,984,844,1900,-105,1550,480,-951,1777,-735,-338,1998,856,1537,870,1757,-676,1796,392,1387,1635,1389,707,95,-335,1111,1655,184,-857,1535,310,-979,-256,-643,-274,485,650,84,-700,0,273,368,1022,1857,1222,1160,916,-754,387,-62,52,1702,1895,-425,1125,1140,48,1349,-449,964,-700,-827,1527,1964,-348,1900,592,746,962,682,-396,-89,-257,856,309,251,-357,988,1944,-112,-546,-72,647,368,-679,583,-584,1967,1047,95,-608,851,1431,559,-619,-354,779,173,-239,1224,-880,-907,128,352,-40,1107,514,776,-880,673,615,907,83,1823,-17,-701,-470,-382,-770,-313,1776,-612,1472,349,744,117,-897,1740,1213,860,-591,818,-64,-659,448,1305,1218,1191,-528,1780,1105,321,1407,-704,1414,723,-741,312,105,1461,-318,1075,1937,1552,400,1224,-347,1737,1369,-394,1462,1027,1567,-897,1892,781,1969,664,867,740,-43,1196,1142,1415,1268,1191,490,-308,-464,294,1749,1038,-564,642,-318,173,-179,-248,1383,-105,1801,195,147,1024,338,1303,-882,-841,1080,-398,731,-709,-925,1806,-445,1825,-549,714,-767,-488,1080,-284,1138,-538,829,426,844,994,-608,-988,-493,859,-240,-863,1782,-551,92,509,385,1797,-51,-1000,809,292,-351,-65,1196,172,-81,-357,654,1495,-956,1427,-17,148,536,433,837,-552,1761,1460,-129,1049,-323,484,947,851,1845,1313,1413,135,1131,1208,1872,1312,-334,1917,566,-684,1054,-855,-889,-263,-431,127,-827,1733,-762,1261,361,1269,754,749,-751,1594,1853,1607,1379,-245,1705,-576,693,-656,-552,1934,-501,1231,688,-266,671,1780,638,315,1857,1570,697,1137,1262,457,895,673,294,534,-136,429,352,-495,132,1278,1751,1652,-30,-662,1021,-160,-277,1612,-989,1003,-616,1168,1902,1480,359,587,556,1688,-676,-422,-158,-82,-804,-429,1253,-663,-307,1623,694,1313,-565,1300,389,-327,-585,215,1746,-912,1817,1553,-680,-488,1161,1362,1951,296,533,1387,1069,1592,1689,47,1838,476,754,903,171,-138,1853,1192,717,46,-84,232,46,625,1030,392,1567,1236,-917,-874,1414,1373,1566,105,955,-398,556,1591,868,-791,1112,-955,1860,-323,774,123,1955,815,-680,1111,593,244,-526,-351,845,229,700,533,1301,-317,1652,317,985,773,-293,638,-166,-777,1003,515,589,-807,-75,-334,1931,1294,296,604,-1,1974,-691,-1000,649,1847,559,-616,1548,532,-139,40,786,220,1254,1697,-149,493,-742,-762,1634,-501,664,1164,-451,207,1705,815,-473,152,1689,1089,1041,-68,-468,-213,1700,114,974,-882,1119,1941,101,1155,1323,-620,188,151,551,1435,271,569,1308,1109,1585,-307,923,1153,351,1425,-166,-811,1756,1912,788,75,-593,445,1937,1227,1305,-291,1242,617,1874,-481,1592,208,-231,-688,985,1261,466,1356,-716,797,-619,1787,1271,1987,370,-458,1419,1041,-90,694,-466,-569,-449,1225,1377,1540,-999,-160,1389,483,1218,1495,675,-774,1861,1142,1375,-656,433,1702,1372,1217,-741,1779,-734,1432,1222,-469,-630,-257,-266,-950,493,-761,-898,-720,688,1109,514,1501,224,1735,1931,-867,-404,-940,1271,744,-716,-879,232,-416,528,1144,435,155,896,425,285,1823,-179,1022,1396,132,1327,180,561,-545,623,1663,781,-924,334,-979,-609,990,-177,983,-661,200,16,171,-98,-428,-427,826,1607,-995,404,-672,75]));
