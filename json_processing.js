
var postDataTemplate =  {
    "select": ["META_DATA", "BLOB", "TIMELINE"],
    "data_class": "RIS_RIB",
    "where": {
        "composite": {
            "primary": {
                "time_index": {
                    "from": "18:38:26.58 08-12-2010",
                    "to": "18:38:26.58 09-12-2010"
                }
            },
            "secondary": {
                "asn": {
                    "match": "EXACT",
                    "exact_match": "INCLUDE_EXACT",
                    "position": 0,
                    "direction": "FROM_RIGHT",
                    "resource": "AS3333"
                }
            }
        }
    },
    "and": [],
    "time_criterion": {
        "between": {
            "minimum_start_time": "18:38:26.58 08-12-2010",
            "maximum_end_time": "18:38:26.58 09-12-2010"
        }
    },
    "combine_timeline": true
}
var getKeys = function(obj){
   var keys = [];
   for(var key in obj){
      keys.push(key);
   }
   return keys;
}

function generatePathHandler(callBack)
{
    return function generatePath(data) {
        //Process data
        var rrcs = {};
        for each(record in data.records)
        {
            if(!(record.data_source in rrcs))
                rrcs[record.data_source] = {};
            rrcs[record.data_source][record.blob.as_path] = 1;
        
        }
        for(r in rrcs)
        {
            rrcs[r] = getKeys(rrcs[r]);
            for(uglyuglyugly in rrcs[r])
                rrcs[r][uglyuglyugly] = rrcs[r][uglyuglyugly].split(' ');
        }
        return callBack(jQuery.toJSON(rrcs));
    }
}
function getRouteData(asNumber, callBack)
{
    if(asNumber == 'fake')
    {
      return callBack({"rrc00":[["3333"],["3257","3333"],["6881","29208","3333"],["7018","3356","3333"],["3257","1103","3333"],["3549","3356","3333"],["3549","286","3333"],["9304","3257","3333"],["6881","3257","1103","3333"],["1930","20965","1103","3333"],["196613","1125","1103","3333"],["9304","6453","1103","3333"],["4608","1221","4637","3356","3333"],["42109","41965","41877","3356","3333"],["1916","27750","20965","1103","3333"],["6881","15685","29208","6939","3333"],["1916","20080","23148","6939","3333"],["4777","2500","2500","2500","7660","22388","11537","20965","1103","3333"]],"rrc01":[["3356","3333"],["286","3333"],["13030","3333"],["9002","3333"],["6939","3333"],["2914","3333"],["6067","3356","3333"],["8468","8218","3333"],["39202","12859","3333"],["39202","174","3333"],["30844","12859","3333"],["30844","174","3333"],["8419","8218","3333"],["286","12859","3333"],["29636","12859","3333"],["2914","12859","3333"],["2914","286","3333"],["6939","12859","3333"],["25286","12859","3333"],["31122","12859","3333"],["8607","8218","3333"],["25286","6939","3333"],["31122","6939","3333"],["286","3356","3333"],["19151","12859","3333"],["29636","2914","3333"],["29636","39326","1103","3333"],["1299","20965","1103","3333"],["20718","2914","12859","3333"]],"rrc03":[["3333"],["1103","3333"],["3356","3333"],["20932","3333"],["20562","3333"],["12859","3333"],["29686","3333"],["30132","3333"],["34288","3333"],["6939","3333"],["6453","1103","3333"],["30132","6939","3333"],["12859","1103","3333"],["6939","12859","3333"],["13030","1103","3333"],["8928","2914","3333"],["1273","286","12859","3333"],["8928","286","12859","3333"]],"rrc04":[["20932","3333"],["12350","12859","3333"],["12350","8218","3333"],["29222","3303","3333"],["29222","286","3333"],["35054","3303","3333"],["25091","13030","3333"],["29222","286","12859","3333"],["35054","2914","12859","3333"],["35054","2914","286","3333"],["513","559","20965","1103","3333"],["559","20965","1103","3333"]],"rrc05":[["13237","3333"],["8447","3333"],["286","3333"],["3303","3333"],["5385","3356","3333"],["5385","3257","3333"],["34347","1299","3333"],["39912","8218","3333"],["34347","12859","3333"],["286","12859","3333"],["1853","8218","3333"],["8596","174","3333"],["8596","12859","3333"],["8596","286","3333"],["8447","12859","3333"],["286","8218","3333"],["8447","6939","3333"],["13030","1103","3333"],["1853","20965","1103","3333"]],"rrc07":[["16150","3333"],["9002","3333"],["6667","3333"],["6939","3333"],["6939","12859","3333"]],"rrc10":[["3257","1103","3333"],["34695","12859","3333"],["34695","3356","3333"],["12637","174","3333"],["12779","3549","3356","3333"],["12779","3549","286","3333"],["34695","6939","3333"],["12779","3257","1103","3333"],["12637","3257","1103","3333"]],"rrc11":[["9002","3333"],["6461","3333"],["13030","3333"],["19151","3333"],["6939","3333"],["2497","1273","3333"],["2497","8218","3333"],["2497","1257","3333"],["14361","1257","3333"],["14361","8218","3333"],["41853","12859","3333"],["22691","1273","3333"],["3257","1103","3333"],["6939","12859","3333"],["13030","12859","3333"],["19151","12859","3333"],["8426","3549","3356","3333"],["2497","3257","1103","3333"],["22691","8001","8218","3333"],["8426","3549","286","3333"],["8426","6939","12859","3333"],["1273","286","12859","3333"]],"rrc12":[["20640","3333"],["6762","3333"],["3257","3333"],["13237","3333"],["4589","3333"],["19151","3333"],["9002","3333"],["29686","3333"],["6939","3333"],["6667","3333"],["2914","3333"],["286","3333"],["680","8218","3333"],["20640","12859","3333"],["3257","1103","3333"],["2914","12859","3333"],["2914","286","3333"],["2857","12859","3333"],["6939","12859","3333"],["8763","12859","3333"],["13237","12859","3333"],["13030","1103","3333"],["25560","12859","3333"],["286","12859","3333"],["34309","12859","3333"],["4589","12859","3333"],["19151","12859","3333"],["680","20965","1103","3333"]],"rrc13":[["8359","3333"],["9002","3333"],["39792","3333"],["41095","1273","3333"],["41095","8218","3333"],["39821","9002","3333"],["28917","8218","3333"],["31323","8359","3333"],["2854","8359","3333"],["8331","9002","9002","3333"],["8402","3216","8218","3333"],["2895","3058","50139","20965","1103","3333"]],"rrc14":[["6762","3333"],["19151","3333"],["6939","3333"],["2914","3333"],["1280","3356","3333"],["2497","8218","3333"],["2914","12859","3333"],["2914","286","3333"],["6939","12859","3333"],["1280","6939","3333"],["19151","12859","3333"],["7575","2914","3333"],["1280","3257","1103","3333"],["2497","6939","12859","3333"],["7575","24490","20965","1103","3333"],["7575","11537","20965","1103","3333"]],"rrc15":[["16735","6762","3333"],["28138","6939","3333"],["28220","4230","3356","3333"],["28220","4230","3257","3333"],["28138","16735","6762","3333"],["22548","16735","6762","3333"],["53070","16735","6762","3333"],["16735","12956","6939","3333"],["1916","11537","20965","1103","3333"],["19089","15201","3549","3356","3333"],["28289","53131","16735","6762","3333"],["53070","16735","12956","6939","3333"],["22548","16735","12956","6939","3333"],["19089","15201","10429","12956","1273","3333"],["19089","15201","10429","12956","286","3333"],["28289","53131","16735","12956","6939","3333"]],"rrc16":[["25152","19151","3333"],["34695","12859","3333"],["34695","3356","3333"],["20144","1273","3333"],["20144","6453","1103","3333"],["6939","3333"],["6939","12859","3333"],["30071","12859","3333"]]});
    }
    postData = postDataTemplate;
    postData.where.composite.secondary.asn.resource = asNumber;
    jQuery.post('/remote/inrdb/query', jQuery.toJSON(postData), generatePathHandler(callBack), 'json');
    
}

