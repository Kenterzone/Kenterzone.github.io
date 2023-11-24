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
    "musicEP": "346회",
    "musictime": "18:00KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8"></font>`
  },
  {
    "mair": "nomal",
    "date": "Wed.",
    "musiconoroff" : false,
    "musicname": "ShowChampion",
    "musicEP": "501회",
    "musictime": "18:04KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8"></font>`
  },
  {
    "mair": "nomal",
    "date": "Thu.",
    "musiconoroff" : false,
    "musicname": "M!CountDown",
    "musicEP": "824회",
    "musictime": "18:08KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8"></font>`
  },

  {
    "mair": "nomal",
    "date": "Fri.",
    "musiconoroff" : true,
    "musicname": "Music Bank",
    "musicEP": "1187회",
    "musictime": "17:15KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">SEENHYUNHEE, Dreamcatcher, Red Velvet, BANG YEDAM, AMPERS&ONE, EASTSHINE, LUN8wave, ZEROBASEONE, ROCKY, &TEAM, ENHYPEN, FANTASY BOYS, THE BOYZ, MCND, VIXX, RYEOWOOK, J.Y.Park</font>`
  },
  {
    "mair": "nomal",
    "date": "Sat.",
    "musiconoroff" : true,
    "musicname": "Music Core",
    "musicEP": "834회",
    "musictime": "15:21KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">Dreamcatcher, Red Velvet, BANG YEDAM, ZEROBASEONE, FANTASY BOYS, AMPERS&ONE, MCND, &TEAM, EASTSHINE, VIXX, THE BOYZ, RYEOWOOK, J.Y.Park(with Kim WanSun)</font>`
  },

  {
    "mair": "nomal",
    "date": "Sun.",
    "musiconoroff" : true,
    "musicname": "Inkigayo",
    "musicEP": "1207회",
    "musictime": "15:25KST",
    "musicsetlist":`ShowGuest:<font color="#adadb8">KISS OF LIFE, Red Velvet, Dreamcatcher, LUN8wave, ZEROBASEONE, 24K+, FANTASY BOYS, WHIB, BANG YEDAM, THE BOYZ, AMPERS&ONE, MCND, EASTSHINE, JANG MIN HO, VIXX, ENHYPEN, RYEOWOOK, J.Y.Park</font>`
  },  ////SP_GUIDE/////
  {
    "date": "Tue.",
    "date_date": "11.28",
    "musicname": "2023 MAMA Awards IN JAPAN(TOKYO DOME)",
    "musicEP": "DAY1",
    "musictime": "18:00KST",
    "musicsetlist":`ShowGuest:MC：<BR/><font color="#adadb8">STREET WOMAN FIGHTER 2, Kep1er, Lee Young Ji, xikers, &TEAM, Dynamicduo, ENHYPEN, INI, JO1, JUST B, TOMORROW X TOGETHER, TVXQ, YOSHIKI</font>`
  },  {
    "date": "Wed.",
    "date_date": "11.29",
    "musicname": "2023 MAMA Awards IN JAPAN(TOKYO DOME)",
    "musicEP": "DAY2",
    "musictime": "18:KST",
    "musicsetlist":`ShowGuest:MC：<BR/><font color="#adadb8">Monika, NiziU, EL7Z UP, LE SSERAFIM, (G)I-DLE, ZEROBASEONE, RIIZE, ATEEZ, BOYNEXTDOOR, TREASURE, SEVENTEEN</font>`
  },  
{
    "date": "Sat.",
    "date_date": "12.2",
    "musicname": "2023 Melon Music Awards",
    "musicEP": "",
    "musictime": "23:15KST",
    "musicsetlist":`ShowGuest:MC：<BR/><font color="#adadb8"></font>`
  },  
{
    "date": "Tue.",
    "date_date": "12.14",
    "musicname": "2023 Asia Artist Awards",
    "musicEP": "",
    "musictime": "23:15KST",
    "musicsetlist":`ShowGuest:MC：Jang Wonyoung(IVE)、Kang Daniel、Sung Hanbin(ZEROBASEONE) <BR/><font color="#adadb8"></font>`
  },  
{
    "date": "Mon.",
    "date_date": "12.9",
    "musicname": "2023 KBS Gayo Festival In JAPAN",
    "musicEP": "",
    "musictime": "23:15KST",
    "musicsetlist":`ShowGuest:MC：Jun Hyunmoo、Seohyun(SNSD)<BR/><font color="#adadb8"></font>`
  },  
{
    "date": "Mon.",
    "date_date": "12.25",
    "musicname": "2023 SBS Gayo Daejeon",
    "musicEP": "",
    "musictime": "23:15KST",
    "musicsetlist":`ShowGuest:MC：Jun Hyunmoo、Seohyun(SNSD)<BR/><font color="#adadb8"></font>`
  },  
{
    "date": "Sun.",
    "date_date": "12.31",
    "musicname": "2023 MBC Gayo Daejeon",
    "musicEP": "",
    "musictime": "23:15KST",
    "musicsetlist":`ShowGuest:MC：Jun Hyunmoo、Seohyun(SNSD)<BR/><font color="#adadb8"></font>`
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
	var  channel_id = "OccO48A_A" ;
	document.getElementById("app_guid").innerHTML =`${musicGuid.map(guidmap).join("")}<font color=Red>Tomorrow</font><BR/> ${musicGuid.map(guidtmrmap).join("")}`;
	document.getElementById("v_channel").innerHTML =`<iframe width="100%" height="100%" src="https://player.twitch.tv/?channel=${channel_id}&parent=Kenterzone.github.io" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>`;
    //setTimeout(function(){document.getElementById("ad_info").innerHTML =``;},60000);
	document.getElementById("livechat").innerHTML =`<iframe src="https://www.twitch.tv/embed/rollelmoberry/chat?darkpopout&parent=Kenterzone.github.io" style="border: 0;height: 85%;width:100%;" frameborder="no" ></iframe>`;
}


