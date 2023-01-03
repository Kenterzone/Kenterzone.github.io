const musicGuid =[
  {
    "mair": "nomal",
    "date": "xMon.",
    "musiconoroff" : false,
    "musicname": " ",
    "musictime": "KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "mair": "nomal",
    "date": "Tue.", 
    "musiconoroff" : false,
    "musicname": "The Show",
    "musicEP": "316회",
    "musictime": "18:00KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "mair": "nomal",
    "date": "Wed.",
    "musiconoroff" : false,
    "musicname": "ShowChampion",
    "musicEP": "461회",
    "musictime": "18:04KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "mair": "nomal",
    "date": "Thu.",
    "musiconoroff" : true,
    "musicname": "M!CountDown",
    "musicEP": "779회",
    "musictime": "17:00KST",
    "musicsetlist":`ShowGuest:`
  },

  {
    "mair": "nomal",
    "date": "Fri.",
    "musiconoroff" : false,
    "musicname": "Music Bank",
    "musicEP": "1146회",
    "musictime": "17:03KST",
    "musicsetlist":`ShowGuest:`
  },
  {
    "mair": "nomal",
    "date": "Sat.",
    "musiconoroff" : false,
    "musicname": "Music Core",
    "musicEP": "Highlight회",
    "musictime": "15:16KST",
    "musicsetlist":`ShowGuest:`
  },

  {
    "mair": "nomal",
    "date": "Sun.",
    "musiconoroff" : false,
    "musicname": "Inkigayo",
    "musicEP": "1166회",
    "musictime": "15:43KST",
    "musicsetlist":`ShowGuest:`
  },  ////SP_GUIDE/////
  {
    "date": "Sat.",
    "date_date": "01.7",
    "musicname": "37th GOLDEN DISC AWARDS",
    "musicEP": "",
    "musictime": "20:00KST",
    "musicsetlist":`ShowGuest:NewJeans, LE SSERAFIM, IVE, (G)I-DLE, YOUNHA, BIG Naughty, BE'O, J-HOPE(BTS), SEVENTEEN, ENHYPEN, Stray Kids, TREASURE, PSY<BR/><font color="green">MC:SUNG SIKYUNG, Lee DaHee, Nichkhun(2PM), Park Sodam</font>`
  }
];


function guidmap(Guid){
  if( (Guid.musiconoroff && Guid.date==mTime(0)) || (Guid.date_date == mDaycheck(0)&& Guid.date==mTime(0))  ){

       return `<ui><li>${Guid.date}>> ${Guid.musicname}-${Guid.musicEP}(${Guid.musictime})<BR /><font color="000000">${Guid.musicsetlist}</font></li><ui>`;
  }else
    if(!Guid.musiconoroff && Guid.date==mTime(0) && !Guid.date_date){

       return `<li>${Guid.date}>> <font color="#adadb8">No ${Guid.musicname} music show</font></li>`;
  }
}

function guidtmrmap(Guidtmr){
  if((Guidtmr.musiconoroff && Guidtmr.date==mTime(1)) || (Guidtmr.date_date == mDaycheck(1)&& Guidtmr.date==mTime(1)) ){
       return `<ui><li>${Guidtmr.date}>> ${Guidtmr.musicname}-${Guidtmr.musicEP}(${Guidtmr.musictime})<BR /><font color="000000">${Guidtmr.musicsetlist}</font></li><ui>
       `;
  }else
    if(!Guidtmr.musiconoroff && Guidtmr.date==mTime(1) && !Guidtmr.date_date ){
       return `<li>${Guidtmr.date}>> <font color="#adadb8">No ${Guidtmr.musicname} music show</font></li>`;
  }
}

function mDaycheck(nowtmr){
  let gmonth = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  let guDate= DateTimezone(9).getDate()+nowtmr;
  let guMM = gmonth[DateTimezone(9).getMonth()];
  let guYY= DateTimezone(9).getYear()+1900;
  if( ( gmonth[DateTimezone(9).getMonth()] && guDate==32) && (guYY%4!=0 && gmonth[02]&&guDate==29) || (guYY%4==0 && gmonth[02] && guDate==32)){guDate='1';guMM=gmonth[guMM++];}
  return( guMM+'.'+guDate) ;
}

function DateTimezone(offset) {
  let d = new Date();
  let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
   return new Date(utc + (3600000*offset));
}

function mTime(nowadd){
  let weekday = ["Sunday","Mon.","Tue.","Wed.","Thu.","Fri.","Sat.","Sun.","Mon."];
  let mday = new Date();
  return weekday[DateTimezone(9).getDay()+nowadd];

  //return weekday[3];   //for test
}

function setup(){
    document.getElementById("app_guid").innerHTML =`${musicGuid.map(guidmap).join("")}<font color=Red>Tomorrow</font><BR/> ${musicGuid.map(guidtmrmap).join("")}`;
    //setTimeout(function(){document.getElementById("ad_info").innerHTML =``;},60000);
}
