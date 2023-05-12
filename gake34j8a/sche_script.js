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
    "musiconoroff" : true,
    "musicname": "The Show",
    "musicEP": "325회",
    "musictime": "18:00KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8"></font>`
  },
  {
    "mair": "nomal",
    "date": "Wed.",
    "musiconoroff" : true,
    "musicname": "ShowChampion",
    "musicEP": "476회",
    "musictime": "18:04KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8"></font>`
  },
  {
    "mair": "nomal",
    "date": "Thu.",
    "musiconoroff" : true,
    "musicname": "M!CountDown",
    "musicEP": "796회",
    "musictime": "17:08KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">ADYA, ICHILLIN', LE SSERAFIM, aespa, DRIPPIN, BLITZERS, LEE MU JIN, EPEX, TEMPEST, Shindosi Power, Xdinary Heroes, ONEUS, HANEUM, Issac Hong, BAE173, BTOB</font>`
  },

  {
    "mair": "nomal",
    "date": "Fri.",
    "musiconoroff" : true,
    "musicname": "Music Bank",
    "musicEP": "1163회",
    "musictime": "17:05KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">ADYA, YEAHSHINE, ICHILLIN', LE SSERAFIM, aespa, AIMERS, EPEX, Xdinary Heroes, BLITZERS, LEE MU JIN, ONEUS, BAE173, BTOB</font>`
  },
  {
    "mair": "nomal",
    "date": "Sat.",
    "musiconoroff" : true,
    "musicname": "Music Core",
    "musicEP": "808회",
    "musictime": "15:21KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">ADYA, Jung Dakyung, ICHILLIN', aespa, BLITZERS, EPEX, Xdinary Heroes, ONEUS, DRIPPIN, LEE MU JIN, BAE173, SUNGMIN, BTOB</font>`
  },

  {
    "mair": "nomal",
    "date": "Sun.",
    "musiconoroff" : true,
    "musicname": "Inkigayo",
    "musicEP": "1182회",
    "musictime": "15:30KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">ADYA, MINMIN, ICHILLIN', JANG HYE RI, LEE CHAE YEON, LE SSERAFIM, aespa, AIMERS, EPEX, BLITZERS, Xdinary Heroes, ONEUS, LEE MU JIN, BAE173, SUNGMIN, BTOB</font>`
  },  ////SP_GUIDE/////
  {
    "date": "Sun.",
    "date_date": "05.7",
    "musicname": "-",
    "musicEP": "",
    "musictime": "--:--KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8"></font>`
  }
];


function guidmap(Guid){
  if( (Guid.musiconoroff && Guid.date==mTime(0)) || (Guid.date_date == mDaycheck(0)&& Guid.date==mTime(0))  ){

       return `<ui><li>${Guid.date}>> ${Guid.musicname}-${Guid.musicEP}(${Guid.musictime})<BR /><font color="#3E7FA8">${Guid.musicsetlist}</font></li><ui>`;
  }else
    if(!Guid.musiconoroff && Guid.date==mTime(0) && !Guid.date_date){

       return `<li>${Guid.date}>> <font color="#adadb8">No ${Guid.musicname} music show</font></li>`;
  }
}

function guidtmrmap(Guidtmr){
  if((Guidtmr.musiconoroff && Guidtmr.date==mTime(1)) || (Guidtmr.date_date == mDaycheck(1)&& Guidtmr.date==mTime(1)) ){
       return `<ui><li>${Guidtmr.date}>> ${Guidtmr.musicname}-${Guidtmr.musicEP}(${Guidtmr.musictime})<BR /><font color="#3E7FA8">${Guidtmr.musicsetlist}</font></li></ui>
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
  let weekday = ["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat.","Sun.","Mon."];
  let mday = new Date();
  return weekday[DateTimezone(9).getDay()+nowadd];
  //return weekday[3];   //for test
}

function setup(){
	var  channel_id = "ims029lseis" ;
	document.getElementById("app_guid").innerHTML =`${musicGuid.map(guidmap).join("")}<font color=Red>Tomorrow</font><BR/> ${musicGuid.map(guidtmrmap).join("")}`;
	document.getElementById("v_channel").innerHTML =`<iframe width="100%" height="100%" src="https://player.twitch.tv/?channel=${channel_id}&parent=Kenterzone.github.io" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>`;
    //setTimeout(function(){document.getElementById("ad_info").innerHTML =``;},60000);
	document.getElementById("livechat").innerHTML =`<iframe src="https://www.twitch.tv/embed/rollelmoberry/chat?darkpopout&parent=Kenterzone.github.io" style="border: 0;height: 85%;width:100%;" frameborder="no" ></iframe>`;
}


