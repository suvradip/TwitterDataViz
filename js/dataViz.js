var _totalTweets =   amitabh.length



	function createElement(tagName, parent, attributeObj, eventObj)
	{		
		var element=document.createElement(tagName);
		for(var key in attributeObj) 
		{
			if(key=="label")
				element.appendChild(document.createTextNode(attributeObj[key]));	

			element.setAttribute(key, attributeObj[key]);
		}

		if(eventObj!==null) {
			for(var eventName in eventObj)
			{
				if (eventObj.hasOwnProperty(eventName)) 
					element.addEventListener(eventName, eventObj[eventName]);	
			}
		}

		parent.appendChild(element);
		return element;
	}




	var paper, paper1, circle, hello, div, select;

	paper = Raphael(150, 100, 1000, 900);
	paper1 = Raphael(100, 300,2000,1000);
	/*circle = paper.circle(410, 245, 100).attr({'cursor':'pointer','fill':'#009933', 'stroke':'#fff', }).click(function () {show()});
	hello =  paper.text(410,245,"Hello!").attr({'font-size':'20' , 'fill':'white', 'stroke':'black', 'stroke-width':'.5', 'title' :'say hello'});*/

	var   tweetCircle, tweetCircleText
		, followersCircle, followersCircleText
		, favouriteCircle, favouriteCircleText
		, followingCircle, followingCircleText;


	var c= 0, l=0, a=0, h=0, L=[], P=[], P1=[], H, A , family, sports, reading, movies, countries, text, textArray=[];
	var CA=[], FA=[], SA=[], MA=[], OTH=[], ALL=[];

	family = ["abhishek", "jaya", "amitabh", " harivansh", "aishwarya", "shweta","Ajitabh", "Bachchan", "nikhil", "nanda", "family", "friends"];
	sports = ["sport", "football", "cricket", "hockey", "tenis", "fifa", "badminton", "boxing", "olympics", "commonwealth", "asian"];

	reading = ["book", "books"];

	movies = ["flim", "cinema", "industry", "picture", "show", "screenplay", "talkie", "screen", "boolywood"];
	countries = ['AFGHANISTAN',
	'ALAND ISLANDS',
	'ALBANIA',
	'ALGERIA',
	'AMERICAN SAMOA',
	'ANDORRA',
	'ANGOLA',
	'ANGUILLA',
	'ANTARCTICA',
	'ANTIGUA AND BARBUDA',
	'ARGENTINA',
	'ARMENIA',
	'ARUBA',
	'AUSTRALIA',
	'AUSTRIA',
	'AZERBAIJAN',
	'BAHAMAS',
	'BAHRAIN',
	'BANGLADESH',
	'BARBADOS',
	'BELARUS',
	'BELGIUM',
	'BELIZE',
	'BENIN',
	'BERMUDA',
	'BHUTAN',
	'BOLIVIA PLURINATIONAL STATE OF',
	'BONAIRE SINT EUSTATIUS AND SABA',
	'BOSNIA AND HERZEGOVINA',
	'BOTSWANA',
	'BOUVET ISLAND',
	'BRAZIL',
	'BRITISH INDIAN OCEAN TERRITORY',
	'BRUNEI DARUSSALAM',
	'BULGARIA',
	'BURKINA FASO',
	'BURUNDI',
	'CAMBODIA',
	'CAMEROON',
	'CANADA',
	'CAPE VERDE',
	'CAYMAN ISLANDS',
	'CENTRAL AFRICAN REPUBLIC',
	'CHAD',
	'CHILE',
	'CHINA',
	'CHRISTMAS ISLAND',
	'COCOS KEELING) ISLANDS',
	'COLOMBIA',
	'COMOROS',
	'CONGO',
	'CONGO THE DEMOCRATIC REPUBLIC OF THE',
	'COOK ISLANDS',
	'COSTA RICA',
	'COTE D\'IVOIRE',
	'CROATIA',
	'CUBA',
	'CURACAO',
	'CYPRUS',
	'CZECH REPUBLIC',
	'DENMARK',
	'DJIBOUTI',
	'DOMINICA',
	'DOMINICAN REPUBLIC',
	'ECUADOR',
	'EGYPT',
	'EL SALVADOR',
	'EQUATORIAL GUINEA',
	'ERITREA',
	'ESTONIA',
	'ETHIOPIA',
	'FALKLAND ISLANDS MALVINAS',
	'FAROE ISLANDS',
	'FIJI',
	'FINLAND',
	'FRANCE',
	'FRENCH GUIANA',
	'FRENCH POLYNESIA',
	'FRENCH SOUTHERN TERRITORIES',
	'GABON',
	'GAMBIA',
	'GEORGIA',
	'GERMANY',
	'GHANA',
	'GIBRALTAR',
	'GREECE',
	'GREENLAND',
	'GRENADA',
	'GUADELOUPE',
	'GUAM',
	'GUATEMALA',
	'GUERNSEY',
	'GUINEA',
	'GUINEA-BISSAU',
	'GUYANA',
	'HAITI',
	'HEARD ISLAND AND MCDONALD ISLANDS',
	'HOLY SEE VATICAN CITY STATE',
	'HONDURAS',
	'HONG KONG',
	'HUNGARY',
	'ICELAND',
	'INDIA',
	'INDONESIA',
	'IRAN ISLAMIC REPUBLIC OF',
	'IRAQ',
	'IRELAND',
	'ISLE OF MAN',
	'ISRAEL',
	'ITALY',
	'JAMAICA',
	'JAPAN',
	'JERSEY',
	'JORDAN',
	'KAZAKHSTAN',
	'KENYA',
	'KIRIBATI',
	'KOREA DEMOCRATIC PEOPLE\'S REPUBLIC OF',
	'KOREA REPUBLIC OF',
	'KUWAIT',
	'KYRGYZSTAN',
	'LAO PEOPLE\'S DEMOCRATIC REPUBLIC',
	'LATVIA',
	'LEBANON',
	'LESOTHO',
	'LIBERIA',
	'LIBYAN ARAB JAMAHIRIYA',
	'LIECHTENSTEIN',
	'LITHUANIA',
	'LUXEMBOURG',
	'MACAO',
	'MACEDONIA THE FORMER YUGOSLAV REPUBLIC OF',
	'MADAGASCAR',
	'MALAWI',
	'MALAYSIA',
	'MALDIVES',
	'MALI',
	'MALTA',
	'MARSHALL ISLANDS',
	'MARTINIQUE',
	'MAURITANIA',
	'MAURITIUS',
	'MAYOTTE',
	'MEXICO',
	'MICRONESIA FEDERATED STATES OF',
	'MOLDOVA REPUBLIC OF',
	'MONACO',
	'MONGOLIA',
	'MONTENEGRO',
	'MONTSERRAT',
	'MOROCCO',
	'MOZAMBIQUE',
	'MYANMAR',
	'NAMIBIA',
	'NAURU',
	'NEPAL',
	'NETHERLANDS',
	'NEW CALEDONIA',
	'NEW ZEALAND',
	'NICARAGUA',
	'NIGER',
	'NIGERIA',
	'NIUE',
	'NORFOLK ISLAND',
	'NORTHERN MARIANA ISLANDS',
	'NORWAY',
	'OMAN',
	'PAKISTAN',
	'PALAU',
	'PALESTINIAN TERRITORY OCCUPIED',
	'PANAMA',
	'PAPUA NEW GUINEA',
	'PARAGUAY',
	'PERU',
	'PHILIPPINES',
	'PITCAIRN',
	'POLAND',
	'PORTUGAL',
	'PUERTO RICO',
	'QATAR',
	'REUNION',
	'ROMANIA',
	'RUSSIAN FEDERATION',
	'RWANDA',
	'SAINT BARTHELEMY',
	'SAINT HELENA ASCENSION AND TRISTAN DA CUNHA',
	'SAINT KITTS AND NEVIS',
	'SAINT LUCIA',
	'SAINT MARTIN FRENCH PART',
	'SAINT PIERRE AND MIQUELON',
	'SAINT VINCENT AND THE GRENADINES',
	'SAMOA',
	'SAN MARINO',
	'SAO TOME AND PRINCIPE',
	'SAUDI ARABIA',
	'SENEGAL',
	'SERBIA',
	'SEYCHELLES',
	'SIERRA LEONE',
	'SINGAPORE',
	'SINT MAARTEN DUTCH PART',
	'SLOVAKIA',
	'SLOVENIA',
	'SOLOMON ISLANDS',
	'SOMALIA',
	'SOUTH AFRICA',
	'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS',
	'SPAIN',
	'SRI LANKA',
	'SUDAN',
	'SURINAME',
	'SVALBARD AND JAN MAYEN',
	'SWAZILAND',
	'SWEDEN',
	'SWITZERLAND',
	'SYRIAN ARAB REPUBLIC',
	'TAIWAN PROVINCE OF CHINA',
	'TAJIKISTAN',
	'TANZANIA UNITED REPUBLIC OF',
	'THAILAND',
	'TIMOR-LESTE',
	'TOGO',
	'TOKELAU',
	'TONGA',
	'TRINIDAD AND TOBAGO',
	'TUNISIA',
	'TURKEY',
	'TURKMENISTAN',
	'TURKS AND CAICOS ISLANDS',
	'TUVALU',
	'UGANDA',
	'UKRAINE',
	'UNITED ARAB EMIRATES',
	'UNITED KINGDOM',
	'UNITED STATES',
	'UNITED STATES MINOR OUTLYING ISLANDS',
	'URUGUAY',
	'UZBEKISTAN',
	'VANUATU',
	'VENEZUELA BOLIVARIAN REPUBLIC OF',
	'VIET NAM',
	'VIRGIN ISLANDS BRITISH',
	'VIRGIN ISLANDS U.S.',
	'WALLIS AND FUTUNA',
	'WESTERN SAHARA',
	'YEMEN',
	'ZAMBIA',
	'ZIMBABWE'];

	var  F=false, s=false, f=false, m=false, c=false;

	for(var i=0; i<_totalTweets; i++)
	{
		A={};

		if(amitabh[i].entities.user_mentions!="")
		{	
		c+=amitabh[i].entities.user_mentions.length; 

		A['id']= amitabh[i].id;
		A['text']= amitabh[i].text;
		A['userMention']=amitabh[i].entities.user_mentions;
		P.push(A);
		a++;

		}

		if(amitabh[i].entities.hashtags!="")
		{	
			H={};
			H['text']=amitabh[i].text;
			H['id']=amitabh[i].id;
			P1.push(H);
			h++;
		}	

		
		

		text= amitabh[i].text;
		textArray=text.split(" ");

		
		for(var j=0; j<textArray.length; j++)
		{
			
				for(var z=0; z<countries.length; z++)
				{
					if(textArray[j].toLowerCase()==countries[z].toLowerCase())
					{	
					CA.push({'text':text, 'reTweet':amitabh[i].retweet_count, 'color':'#0099FF'});
					ALL.push({'text':text, 'reTweet':amitabh[i].retweet_count, 'color':'#0099FF'});
					F=true;
					c=true;
					break;
					}
				}
			


				
				for(var z=0; z<family.length; z++)
				{
					if(textArray[j].toLowerCase()==family[z].toLowerCase())
					{	
					FA.push({'text':text, 'reTweet':amitabh[i].retweet_count,  'color':'#FF66FF'});
					ALL.push({'text':text, 'reTweet':amitabh[i].retweet_count, 'color':'#FF66FF'});
					F=true;
					f=true;
					break;
					}
				}
			

	
				for(var z=0; z<sports.length; z++)
				{
					if(textArray[j].toLowerCase()==sports[z].toLowerCase())
					{	
					SA.push({'text':text, 'reTweet':amitabh[i].retweet_count,  'color':'#993399'});
					ALL.push({'text':text, 'reTweet':amitabh[i].retweet_count, 'color':'#993399'});
					F=true;
					s=true;
					break;	
					}
				}
			
			

			
				for(var z=0; z<movies.length; z++)
				{
					if(textArray[j].toLowerCase()==movies[z].toLowerCase())
					{	
					MA.push({'text':text, 'reTweet':amitabh[i].retweet_count, 'color':'#00CC66'});
					ALL.push({'text':text, 'reTweet':amitabh[i].retweet_count, 'color':'#00CC66'});
					F=true;
					m=true;
					break;	
					}
				}


				if(c || f || m || s )
				{
				OTH.push({'text':text, 'reTweet':amitabh[i].retweet_count, 'color':'#585858'});
				ALL.push({'text':text, 'reTweet':amitabh[i].retweet_count, 'color':'#585858'});
				c=false;
				m=false;
				f=false;
				s=false;
				break;
				}

			
		}

		
	}

	function sortObj(UO)
	{

	var sortable = [], F={};
	for (var k in UO)
	sortable.push([k, UO[k]])

	sortable.sort(function(b, a) {return a[1] - b[1]})


	for(var r in sortable)
	F[sortable[r][0]] = sortable[r][1];
	
	return F;
	}

	CA=sortObj(CA);
	FA=sortObj(FA);
	SA=sortObj(SA);
	MA=sortObj(MA);
	ALL=sortObj(ALL);



		paper.circle(100 ,20, 20).attr({'fill':'#0099FF','stroke':'#000000' })
		paper.text(100,20, "country");


		paper.circle(150 ,20, 20).attr({'fill':'#FF66FF','stroke':'#000000' })
		paper.text(150,20, "Family");


		paper.circle(200 ,20, 20).attr({'fill':'#993399','stroke':'#000000' })
		paper.text(200,20, "Sports");

		paper.circle(250 ,20, 20).attr({'fill':'#00CC66','stroke':'#000000' })
		paper.text(250,20, "Movie");


		paper.circle(300 ,20, 20).attr({'fill':'#585858','stroke':'#000000' })
		paper.text(300,20, "Others");



		paper.text(380,60, "According to retweet, high count to low count").attr({'font-size':'15'});

		div = createElement("div", document.body, { style:"margin:10% 0 0 70%;position:absolute ;"});
		select = createElement("select", div,{id:"select"} ,{ change:function(){init()}, click:function(){init()} });
		var option = ["select", "Family", "Flim/Show", "Sports", "Countries", "Person Mentioned", "Hash Tag","Others", "ALL"], op=0;
		for(var op=0; op<option.length; op++)
		createElement("option", select, {label:option[op]} );
	//}


	var init = function()
	{
		var x = document.getElementById("select").value;
		if(x=="Family")
		showMore(FA);
		else if(x=="Sports")
		showMore(SA);
		else if(x=="Countries")
		showMore(CA);
		else if(x=="Flim/Show")	
		showMore(MA);
		else if(x=="Person Mentioned")	
		showMore(P);
		else if(x=="Hash Tag")	
		showMore(P1);
		else if(x=="Others")
		showMore(OTH);		
		else if(x=="ALL")
		showMore(ALL);	
	}



	var showMore =function(obj)
	{
		paper1.clear();
		var color="";
		if(typeof obj==="object")
		{
			

			var x = 009933;
			var yincre = 0, xincre=0, incre=0 ; 
			var c, anim;


			for(var z in obj)
			{
				if(obj[z].color)
				color=obj[z].color;
				else
				color='#00'+x;	

				if(incre!==7)
				{
					c = paper1.circle(450 ,350, 20).attr({'cursor':'pointer','fill':color,'stroke':'#000000', 'title' :obj[z].text }).click((function(a) { return function(){ abc(obj,a) }})(z));
					
					t = paper1.text(20 + xincre ,20 + yincre , "Tweet").attr({'cursor':'pointer', 'fill':'black', 'title' :obj[z].text }).click((function(a) { return function(){ abc(obj,a) }})(z));	

					anim= Raphael.animation({cx: 20 + xincre, cy: 20 + yincre}, 2e3);

					c.animate(anim);
				

					//paper.text(170 + xincre,300 + yincre, z + " : " +obj[z]).attr({'text-anchor': 'start', 'font-size':'13'});
					yincre = yincre + 50 ;
					incre ++;
				}else
				{
					incre = 0;
					yincre= 0;
					xincre = xincre + 60;
				}
				x+=1;	
			}
		}
	}


	function abc(obj,x)
	{
	console.log(obj[x].id);
	}