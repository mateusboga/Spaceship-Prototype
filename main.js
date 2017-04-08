var PI = Math.PI;

var C1 = document.getElementById("C1");var ctx1 = C1.getContext("2d");
var C2 = document.getElementById('C2'); var ctx2 = C2.getContext("2d");
var C3 = document.getElementById('C3'); var ctx3 = C3.getContext("2d");

var herc_basis = new Image(); herc_basis.src = "ships/herc01/basis.png";
var herc_wings = new Image(); herc_wings.src = "ships/herc01/wings1.png";
var herc_pulse = new Image(); herc_pulse.src = "ships/herc01/pulse2.png";
var closestars = new Image(); closestars.src = "background/closestars.png";
var closestars1 = new Image(); closestars1.src = "background/closestars1.png";
var planet1 = new Image(); planet1.src = "background/Planet1.png";
var mercury = new Image(); mercury.src = "background/mercury.png";
var venus = new Image(); venus.src = "background/venus4.png";
var earth = new Image(); earth.src = "background/terra.png";
var mars = new Image(); mars.src = "background/mars.png";
var glowr = new Image(); glowr.src = "background/HaloRed.png";
var glowo = new Image(); glowo.src = "background/HaloOrange.png";
var glowy = new Image(); glowy.src = "background/HaloYellow.png";
var glowb = new Image(); glowb.src = "background/HaloBlue.png";
var gloww = new Image(); gloww.src = "background/HaloWhite.png";
var gloww2 = new Image(); gloww2.src = "background/HaloWhite2.png";
var star1 = new Image(); star1.src = "background/Star1.png";
var star2 = new Image(); star2.src = "background/Star2.png";
var star3 = new Image(); star3.src = "background/Star3.png";
var star4 = new Image(); star4.src = "background/Star4.png";
var star5 = new Image(); star5.src = "background/Star5.png";
var star6 = new Image(); star6.src = "background/Star6.png";
var star7 = new Image(); star7.src = "background/Star7.png";
var star8 = new Image(); star8.src = "background/Star8.png";
var star9 = new Image(); star9.src = "background/Star9.png";
var star10 = new Image(); star10.src = "background/Star10.png";
var star11 = new Image(); star11.src = "background/Star11.png";
var rock1 = new Image(); rock1.src = "debree/rock1.png";
var rock2 = new Image(); rock2.src = "debree/rock2.png";
var rock3 = new Image(); rock3.src = "debree/rock3.png";
var herc_fire1_1 = new Image(); herc_fire1_1.src = "ships/herc01/fire1_1.png";var herc_fire1_2 = new Image(); herc_fire1_2.src = "ships/herc01/fire1_2.png";var herc_fire1_3 = new Image(); herc_fire1_3.src = "ships/herc01/fire1_3.png";
var herc_fire0_1 = new Image(); herc_fire0_1.src = "ships/herc01/fire0_1.png";var herc_fire0_2 = new Image(); herc_fire0_2.src = "ships/herc01/fire0_2.png";var herc_fire0_3 = new Image(); herc_fire0_3.src = "ships/herc01/fire0_3.png";
var herc_fire2_1 = new Image(); herc_fire2_1.src = "ships/herc01/fire2_1.png";var herc_fire2_2 = new Image(); herc_fire2_2.src = "ships/herc01/fire2_2.png";var herc_fire2_3 = new Image(); herc_fire2_3.src = "ships/herc01/fire2_3.png";
var herc_fire3_1 = new Image(); herc_fire3_1.src = "ships/herc01/fire3_1.png";var herc_fire3_2 = new Image(); herc_fire3_2.src = "ships/herc01/fire3_2.png";var herc_fire3_3 = new Image(); herc_fire3_3.src = "ships/herc01/fire3_3.png";
var herc_fire4_1 = new Image(); herc_fire4_1.src = "ships/herc01/fire4_1.png";var herc_fire4_2 = new Image(); herc_fire4_2.src = "ships/herc01/fire4_2.png";var herc_fire4_3 = new Image(); herc_fire4_3.src = "ships/herc01/fire4_3.png";
var herc_fire5_1 = new Image(); herc_fire5_1.src = "ships/herc01/fire5_1.png";var herc_fire5_2 = new Image(); herc_fire5_2.src = "ships/herc01/fire5_2.png";var herc_fire5_3 = new Image(); herc_fire5_3.src = "ships/herc01/fire5_3.png";


var tunnel = new Image(); tunnel.src = "background/tunnelvision.png";
var blur1 = new Image(); blur1.src = "ships/speed0_1.png";
var blur2 = new Image(); blur2.src = "ships/speed0_2.png";
var blur3 = new Image(); blur3.src = "ships/speed0_3.png";
var blur4 = new Image(); blur4.src = "ships/speed0_4.png";
var blur5 = new Image(); blur5.src = "ships/speed0_5.png";
var blur6 = new Image(); blur6.src = "ships/speed0_6.png";
var blur7 = new Image(); blur7.src = "ships/speed1_1.png";
var blur8 = new Image(); blur8.src = "ships/speed1_2.png";
var blur9 = new Image(); blur9.src = "ships/speed1_3.png";
var blur10 = new Image(); blur10.src = "ships/speed1_4.png";
var blur11 = new Image(); blur11.src = "ships/speed1_5.png";
var blur12 = new Image(); blur12.src = "ships/speed1_6.png";
var blur13 = new Image(); blur13.src = "ships/speed2_1.png";
var blur14 = new Image(); blur14.src = "ships/speed2_2.png";
var blur15 = new Image(); blur15.src = "ships/speed2_3.png";
var blur16 = new Image(); blur16.src = "ships/speed2_4.png";
var blur17 = new Image(); blur17.src = "ships/speed2_5.png";
var blur18 = new Image(); blur18.src = "ships/speed2_6.png";



var speedblur = [[blur1,blur2,blur3,blur4,blur5,blur6],[blur7,blur8,blur9,blur10,blur11,blur12],[blur13,blur14,blur15,blur16,blur17,blur18]];
var spr_rock = [rock1,rock2,rock3];
var spr_herc_fire = [[herc_fire0_1,herc_fire0_2,herc_fire0_3],[herc_fire1_1,herc_fire1_2,herc_fire1_3],[herc_fire2_1,herc_fire2_2,herc_fire2_3]];
var spr_herc_fire2 = [[],[herc_fire3_1,herc_fire3_2,herc_fire3_3],[herc_fire4_1,herc_fire4_2,herc_fire4_3],[herc_fire5_1,herc_fire5_2,herc_fire5_3]]

var hudc = "#29f";
var shake = 0, shakemax = 0, shakebool = 1;

var game = {view:1,pause:false}, mouse = {x:0,y:0,xb:0,yb:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0,xm:0,ym:0,r:0,r2:0,lclick:false,rclick:false,mclick:false};
var mousex, mousey;
var keys = {space:false};
var player = {
	x:0,y:0,weight:150,
	mspeed: 2000,
	speed: 0, xspeed: 0, yspeed: 0,
	mode: 0, offset: 0, offsetmax: 100,
	fire: false, modeo: 0, modestr: "",
	firecool: 0, firespeed: 10,
	parts:{
		basis: herc_basis,
		wings: herc_wings,
		pulse: herc_pulse,
		fire: spr_herc_fire,
		fire2: spr_herc_fire2, firestage : 0
	},
	radar: true, aimlock: false, rocketlock: false
}

var objects = [];
var bodies = [
        {name:"Sol",type:"star",spr:star1,glow:glowy,x:0,y:0,distance:3000000,size:960,child:[
                {name:"Mercury",type:"planet",spr:mercury,x:340897363,y:243004111,distance:10000,size:21*1},
                {name:"Venus",type:"planet",spr:venus,x:-1154834415,y:27538934,distance:40000,size:51*2.5},
                {name:"Gaia",type:"planet",spr:earth,x:-807527152,y:1028824202,distance:30000,size:51*2.6},
                {name:"Mars",type:"planet",spr:mars,x:960962897,y:-1113941920,distance:35000,size:51*2},
 
                /*{name:"Jupiter",type:"planet",spr:jupiter,x:34300,y:1000,distance:10000,size:51},
                {name:"Saturn",type:"planet",spr:saturn,x:24300,y:30000,distance:30000,size:51*2},
                {name:"Uranus",type:"planet",spr:uranus,x:-2000,y:60000},
                {name:"Neptune",type:"planet",spr:neptune,x:34300},*/
        ]},
		{name:"Toliman A",type:"star",spr:star1,glow:glowy,x:23597141941,y:27044283153,distance:3000000,size:1060,child:[
			{name:"Toliman B",type:"star",spr:star1,x:-143000000,y:100000000,distance:500000,size:1000},
			{name:"Proxima",type:"star",spr:star3,x:-1000000000,y:-1000000000,distance:100000,size:260,child:[
				{name:"Proxima b",type:"planet",spr:mercury,x:34300,y:10000,distance:10000,size:51}
			]},
		]},
		{name:"Barnard",type:"star",spr:star6,x:33330554131,y:6323545395,distance:300000,size:100,child:[
		]},
		{name:"Wolf 359",type:"star",spr:star6,x:-1441983277,y:34630950248,distance:300000,size:100,child:[
		]},
		{name:"Lalande 21185",type:"star",spr:star9,x:3204901612,y:44728180394,distance:300000,size:300,child:[
		]},
		{name:"Sirius A",type:"star",spr:star4,glow:glowb,x:-54581953433,y:25773248619,distance:10000000,size:5060,child:[
			{name:"Sirius B",type:"star",spr:star8,x:-143000000,y:100000000,distance:500000,size:1000},
			{name:"Xylanthia",type:"planet",spr:mercury,x:-1226021700,y:-1129972224,distance:35000,size:51*2}
		]},
		{name:"UV Ceti",type:"star",spr:star9,glow:glowr,x:-36752341865,y:-25418664691,distance:500000,size:120,child:[
			{name:"BL Ceti",type:"star",spr:star5,x:143000000,y:-100000000,distance:40000,size:120}
		]},
		{name:"Procyon A",type:"star",spr:star10,glow:gloww,x:-64965129181,y:59388846428,distance:10000000,size:4560,child:[
			{name:"Procyon B",type:"star",spr:star11,x:-340897363,y:-243004111,distance:50000,size:21}
		]},
]
var _ = {
	Sol: bodies[0],
	Sirius: bodies[5],
	AlphaCen: bodies[1],
	Barnard: bodies[2],
	Wolf359: bodies[3],
	Lalande21185: bodies[4],
}
var camd = 0.2;

window.onload=function(){
	res();
}

function res(){
	C1.width = $(window).width(); C1.height = $(window).height(); ctx1.imageSmoothingEnabled = false;
	C2.width = $(window).width(); C2.height = $(window).height(); ctx2.imageSmoothingEnabled = false;
	C3.width = $(window).width(); C3.height = $(window).height(); ctx3.imageSmoothingEnabled = false;
}

window.setInterval(function(){
	mouse.r+=0.1; tsp1 = (Math.abs(player.xspeed)+Math.abs(player.yspeed));
	
	shake += ( shakemax-shake )/1.001;
	if( Math.abs(shake) > Math.abs(shakemax/1.01) ){ shakebool = -shakebool };
	shakemax = (tsp1*(0.0001/Math.pow(10,player.mode)))*shakebool; if( Math.abs(shakemax) > 5 ){ shakemax = 5*shakebool };
	
	if( game.pause == false && game.view == 1 ){
		mousex = mouse.x; mousey = mouse.y;
		
	}
		mouse.xm += (mouse.x-mouse.xm)/2; mouse.ym += (mouse.y-mouse.ym)/2;
		mouse.x1 += (mousex-mouse.x1)/3; mouse.y1 += (mousey-mouse.y1)/3;
		if( player.aimlock == false ){
		
		mouse.x2 += (mousex-mouse.x2)/(player.weight/20); mouse.y2 += (mousey-mouse.y2)/(player.weight/20);
		mouse.x3 += (mousex-mouse.x3)/18; mouse.y3 += (mousey-mouse.y3)/18;
		}

		player.x += player.xspeed; player.y += player.yspeed;
		player.modeo += (0-player.modeo)/50;
		px = LX(player.x); py = LY(player.y)
		
		if( keys.space == true || player.rocketlock == true ){
			player.xspeed += (((player.speed*(Math.pow(50,player.mode)))*((mouse.x2-px)/(Math.abs(mouse.x2-px)+Math.abs(mouse.y2-py))))-player.xspeed)/(5*(player.weight/10));
			player.yspeed += (((player.speed*(Math.pow(50,player.mode)))*((mouse.y2-py)/(Math.abs(mouse.x2-px)+Math.abs(mouse.y2-py))))-player.yspeed)/(5*(player.weight/10));
		}else{
			player.xspeed += (0-player.xspeed)/20;
			player.yspeed += (0-player.yspeed)/20;
		}
	
	draw();
	
	
	if( C1.width != $(window).width() || C1.height != $(window).height() ){ res(); }
},1000/30)

function draw(){

	ctx1.clearRect(0,0,C1.width,C1.height);
	ctx2.clearRect(0,0,C2.width,C2.height);
	ctx3.clearRect(0,0,C3.width,C3.height);
	
	drawStars();
	drawBodies();
	drawObjects();
	
	drawPlayer();
	
	if( game.pause == false ){ drawCursor(); }else{
		drawMenu();
	}

}

function drawMenu(){
	ctx1.fillStyle = "#000"; ctx1.globalAlpha = 0.8;
	ctx1.fillRect(0,0,C1.width,C1.height);
	ctx1.globalAlpha = 1;
	
	drawCursor2(mouse.xm,mouse.ym);
}

function drawCursor2(x,y){
	ctx1.save();
	ctx1.fillStyle = hudc;
	ctx1.translate(x,y);
	ctx1.beginPath();
	ctx1.moveTo(0,0);
	ctx1.lineTo(30,10);
	ctx1.lineTo(17,17);
	ctx1.lineTo(10,30);
	ctx1.lineTo(0,0);
	ctx1.fill();
	ctx1.restore();
}

function drawStars(){
	ctx3.save(); ctx3.globalAlpha = 1;
	ctx3.translate(LX(mouse.x)/100000000,LY(mouse.y)/100000000);
	ctx3.drawImage(closestars,0,0,closestars.width,closestars.height);
	ctx3.restore();
	ctx2.save(); ctx3.globalAlpha = 1;
	ctx2.translate(LX(mouse.x)/80000000,LY(mouse.y)/80000000);
	ctx2.drawImage(closestars1,-closestars1.width/2,-closestars1.height/2);
	ctx2.restore();
}

function drawBodies(){

	for(i=0;i<bodies.length;i++){ body = bodies[i];
		
		ctx2.save();
		ctx2.translate(LX(body.x,1/body.distance),LY(body.y,1/body.distance));
		s = (body.size/(body.distance/1000000))
		
		if( typeof body.glow == "object" ){
			ctx2.globalAlpha = 0.2;
			ctx2.drawImage(body.glow,-s*5,-s*5,s*10,s*10);
			ctx2.globalAlpha = 1;
		}
		ctx2.drawImage(body.spr,-s/2,-s/2,s,s);
		
		ctx2.restore();
		if( body.child.length > 0 ){
			for(j=0; j<body.child.length;j++){ pl = body.child[j];
				ctx2.save();
				ctx2.translate(LX((body.x)+(pl.x),1/pl.distance),LY((body.y)+(pl.y),1/pl.distance));
				s1 = (body.size/(body.distance/5000000))
				ctx2.drawImage(pl.spr,-s1/2,-s1/2,s1,s1);
				ctx2.restore();
				if( typeof pl.child == "array" && pl.child.length > 0 ){
					for(k=0; k<pl.child.length;k++){ pl2 = pl.child[j];
						ctx2.save();
						ctx2.translate(LX((pl.x)+(pl2.x),1/pl2.distance),LY((pl.y)+(pl2.y),1/pl2.distance));
						s2 = (body.size/(body.distance/5000000));
						ctx2.drawImage(pl2.spr,-s2/2,-s2/2,s2,s2);
						ctx2.restore();
					}
				}
			}
		}
	}
}

function drawObjects(){
	for(i=0;i<objects.length;i++){ o = objects[i];
		if( o.x > player.x-C1.width && o.x < player.x+C1.width && o.y > player.y-C1.height && o.y < player.y+C1.height ){
		
		ctx1.save();
		ctx1.translate(LX(o.x),LY(o.y));
		ctx1.rotate(o.r);
		ctx1.drawImage(o.spr,-o.spr.width,-o.spr.height,o.spr.width*2,o.spr.height*2);
		ctx1.restore();
		
		}
		o.x+=o.xspeed; o.y+=o.yspeed; o.r+=o.rspeed;
	}
}

function drawRadar(){
	ctx1.globalAlpha = 0.25;
	for(i=0;i<objects.length;i++){ o = objects[i];

		x = LX(o.x,0.1/(1+(10*(player.mode*2))));
		y = LY(o.y,0.1/(1+(10*(player.mode*2))));
		//x = LX(o.x,(0.1/(1+player.mode*(Math.pow(2,player.mode))))/(100*(1+player.mode)));
		//y = LY(o.y,(0.1/(1+player.mode*(Math.pow(2,player.mode))))/(100*(1+player.mode)));
		ctx1.save();
		ctx1.translate(x,y);
		ctx1.beginPath(); 
		ctx1.lineWidth = 2;
		ctx1.arc(0,0,5/(1+(player.speed)/10000),0,PI*2);
		ctx1.stroke();
		ctx1.restore();
	}
	for(i=0;i<bodies.length;i++){ o = bodies[i];
	
		x = LX(o.x,(0.1/(1+player.mode*(Math.pow(10,player.mode+1))))/(100*(1+player.mode)));
		y = LY(o.y,(0.1/(1+player.mode*(Math.pow(10,player.mode+1))))/(100*(1+player.mode)));
		ctx1.save();
		ctx1.globalAlpha = 0.80;
		ctx1.translate(x,y);
		ctx1.beginPath(); 
		ctx1.lineWidth = 3;
		s = o.size*(10);
		ctx1.arc(0,0,(100*s/2)/((10+player.mode*(Math.pow(10,player.mode+1)))*(10*(1+player.mode))/10),0,PI*2);
		ctx1.stroke();
		ctx1.font = "Bold 10px Arial";
		ctx1.textAlign = "center";
		if(!( player.mode > 2 && o.type == "planet" )){ctx1.fillText(o.name,0,-10);}
		ctx1.restore();
		ctx1.globalAlpha = 0.25;
		if( o.child.length > 0 ){
			for(j=0;j<o.child.length;j++){ o2 = o.child[j];
				ctx1.save();
				if( o2.type == "star" ){ctx1.globalAlpha = 0.80;}else{ ctx1.globalAlpha = 0.50; }
				ctx1.translate(LX((o.x)+(o2.x),(0.1/(1+player.mode*(Math.pow(10,player.mode+1))))/(100*(1+player.mode))),LY((o.y)+(o2.y),(0.1/(1+player.mode*(Math.pow(10,player.mode+1))))/(100*(1+player.mode))));
				ctx1.beginPath(); 
				ctx1.lineWidth = 3;
				ctx1.arc(0,0,(100*o2.size/2)/((10+player.mode*(Math.pow(10,player.mode+1)))*(10*(1+player.mode))/10),0,PI*2);
				ctx1.stroke();
				ctx1.font = "Bold 10px Arial";
				ctx1.textAlign = "center";
				if(!( player.mode > 2 )){ctx1.fillText(o2.name,0,-10);}
				ctx1.restore();
				ctx1.globalAlpha = 0.25;
				if( typeof o2.child == "array" && o2.child.length > 0 ){ o3 = o2.child[j];
					ctx1.save();
					if( o3.type == "star" ){ctx1.globalAlpha = 0.80;}else{ ctx1.globalAlpha = 0.50; }
					ctx1.translate(LX((o2.x)+(o3.x),(0.1/(1+player.mode*(Math.pow(10,player.mode+1))))/(100*(1+player.mode))),LY((o2.y)+(o3.y),(0.1/(1+player.mode*(Math.pow(10,player.mode+1))))/(100*(1+player.mode))));
					ctx1.beginPath(); 
					ctx1.lineWidth = 3;
					ctx1.arc(0,0,(100*o3.size/2)/((10+player.mode*(Math.pow(10,player.mode+1)))*(10*(1+player.mode))/10),0,PI*2);
					ctx1.stroke();
					ctx1.font = "Bold 10px Arial";
					ctx1.textAlign = "center";
					if(!( player.mode > 2 && o3.type == "planet" )){ctx1.fillText(o3.name,0,-10);}
					ctx1.restore();
					ctx1.globalAlpha = 0.25;
				}
			}
		}
	}
	ctx1.save();
	ctx1.globalAlpha = 1;
	ctx1.translate(LX(player.x,(0.01/(1+tsp/100))),LY(player.y,(0.01/(1+(Math.abs(player.xspeed)+Math.abs(player.yspeed))/100))));
	ctx1.lineWidth = 2;
	ctx1.beginPath(); 
	ctx1.arc(0,0,2,0,PI*2);
	ctx1.stroke();
	ctx1.restore();
	ctx1.globalAlpha = 1;
}

function drawPlayer(){
	tsp = (Math.abs(player.xspeed)+Math.abs(player.yspeed));
	
	
	ctx1.fillStyle = hudc;ctx1.strokeStyle = hudc;
	if( player.radar == true ){
		drawRadar();
	}
	
	if( tsp.toFixed(1) > 0 ){
		ctx1.save();
		ctx1.translate(LX(player.x),LY(player.y));
		x = (200*(player.xspeed/tsp)); y = (200*(player.yspeed/tsp));
		ctx1.rotate(Math.atan2(y,x)); ctx1.globalAlpha = 0.25;
		ctx1.beginPath(); 
		ctx1.arc(0,0,400,-PI/40,0.02-PI/40);
		ctx1.stroke();
		ctx1.beginPath(); 
		ctx1.arc(0,0,400,PI/40,0.02+PI/40);
		ctx1.stroke();
		if( tsp > 20000000 ){
			n = Math.floor(Math.random()*6); ctx1.rotate(PI/2); iter = 2;
			ctx1.drawImage(speedblur[iter][n],-speedblur[iter][0].width,-speedblur[iter][0].height*1.5,speedblur[iter][0].width*2,speedblur[iter][0].height*2)
		}
		else if( tsp > 200000 ){
			n = Math.floor(Math.random()*6); ctx1.rotate(PI/2); iter = 1;
			ctx1.drawImage(speedblur[iter][n],-speedblur[iter][0].width,-speedblur[iter][0].height*1.5,speedblur[iter][0].width*2,speedblur[iter][0].height*2)
		}
		else if( tsp > 20000 ){
			n = Math.floor(Math.random()*6); ctx1.rotate(PI/2); iter = 0;
			ctx1.drawImage(speedblur[iter][n],-speedblur[iter][0].width,-speedblur[iter][0].height*1.5,speedblur[iter][0].width*2,speedblur[iter][0].height*2)
		}
		ctx1.restore();
	}
	
	ctx1.save();
	ctx1.translate(LX(player.x),LY(player.y));
	ctx1.rotate((3*PI/2)+Math.atan2((mouse.y2-LY(player.y)),(mouse.x2-LX(player.x))))
	if( player.fire == true && player.firecool <= 0 ){ player.firecool = player.firespeed;
		ctx1.fillStyle = "#ffa";
		ctx1.fillRect(6,0,4,2000);
		ctx1.fillRect(-8,0,4,2000);
	}
	if( player.firecool > 0 ){player.firecool--;}
	
	fire = Math.floor(Math.random()*3);fire2 = Math.floor(Math.random()*3);
	sprfire = player.parts.fire[player.parts.firestage][fire];
	sprfire2 = player.parts.fire2[player.mode][fire2];
	ctx1.drawImage(player.parts.basis,-player.parts.basis.width,-player.parts.basis.height,player.parts.basis.width*2,player.parts.basis.height*2);
	ctx1.drawImage(player.parts.wings,-player.parts.wings.width,-player.parts.wings.height,player.parts.wings.width*2,player.parts.wings.height*2);
	ctx1.drawImage(player.parts.pulse,-player.parts.pulse.width,-player.parts.pulse.height,player.parts.pulse.width*2,player.parts.pulse.height*2);
	
	
	
	if( player.speed > 0 && (keys.space == true || player.rocketlock == true) ){ ctx1.drawImage(sprfire,-sprfire.width,-sprfire.height,sprfire.width*2,sprfire.height*2); };
	if( player.speed > 0 && (keys.space == true || player.rocketlock == true) && player.mode > 0 ){ ctx1.drawImage(sprfire2,-sprfire2.width,-sprfire2.height,sprfire2.width*2,sprfire2.height*2); };
	
	
	if( tsp > 0 ){  player.offset += ((player.offsetmax*(player.mode+1))-100-player.offset)/10 }else{ player.offset += (0-player.offset)/10 };
	
	if( player.speed > 1000 ){ player.parts.firestage = 2 }else if( player.speed > 20 ){ player.parts.firestage = 1 }else{ player.parts.firestage = 0 }
	
	ctx1.restore();
	ctx1.save();
	ctx1.translate(LX(player.x),LY(player.y));
	ctx1.rotate((3*PI/2)+Math.atan2((mouse.y1-LY(player.y)),(mouse.x1-LX(player.x))))
	
	ctx1.fillStyle = hudc;ctx1.strokeStyle = hudc;
	ctx1.globalAlpha = 1;
	acc = (200*player.speed/player.mspeed)
	ctx1.fillRect(player.parts.basis.width,acc-5,10,5);
	ctx1.fillRect(-player.parts.basis.width,acc-5,-10,5);
	ctx1.fillRect(player.parts.basis.width,acc+10,10,5);
	ctx1.fillRect(-player.parts.basis.width,acc+10,-10,5);
	ctx1.fillRect(player.parts.basis.width,acc+4,10,2);
	ctx1.fillRect(-player.parts.basis.width,acc+4,-10,2);
	ctx1.globalAlpha = 0.25;
	ctx1.fillRect(player.parts.basis.width,-10,10,5);
	ctx1.fillRect(-player.parts.basis.width,-10,-10,5);
	ctx1.fillRect(player.parts.basis.width+12,0,5,5);
	ctx1.fillRect(-player.parts.basis.width-12,0,-5,5);
	ctx1.fillRect(player.parts.basis.width+12,10,5,5);
	ctx1.fillRect(-player.parts.basis.width-12,10,-5,5);
	ctx1.fillRect(player.parts.basis.width+12,20,5,5);
	ctx1.fillRect(-player.parts.basis.width-12,20,-5,5);
	ctx1.fillRect(player.parts.basis.width+12,40,5,5);
	ctx1.fillRect(-player.parts.basis.width-12,40,-5,5);
	ctx1.fillRect(player.parts.basis.width+12,60,5,5);
	ctx1.fillRect(-player.parts.basis.width-12,60,-5,5);
	ctx1.fillRect(player.parts.basis.width+12,100,5,5);
	ctx1.fillRect(-player.parts.basis.width-12,100,-5,5);
	ctx1.fillRect(player.parts.basis.width+12,160,5,5);
	ctx1.fillRect(-player.parts.basis.width-12,160,-5,5);
	ctx1.fillRect(player.parts.basis.width,200+15,10,5);
	ctx1.fillRect(-player.parts.basis.width,200+15,-10,5);
	ctx1.globalAlpha = 1;
	if( player.mode >= 1 ){
		ctx1.fillRect(player.parts.basis.width+20,0,10,10);
		ctx1.fillRect(-player.parts.basis.width-20,0,-10,10);
	}
	if( player.mode >= 2 ){
		ctx1.fillRect(player.parts.basis.width+20,15,15,10);
		ctx1.fillRect(-player.parts.basis.width-20,15,-15,10);
	}
	if( player.mode >= 3 ){
		ctx1.fillRect(player.parts.basis.width+20,30,20,10);
		ctx1.fillRect(-player.parts.basis.width-20,30,-20,10);
	}	
	ctx1.restore();
	
	ctx1.globalAlpha = 0.05;
	ctx1.lineWidth = 45;
	ctx1.beginPath(); 
	ctx1.arc(LX(player.x,0.7),LY(player.y,0.7),450,PI/2,PI);
	ctx1.stroke();
	ctx1.beginPath(); 
	ctx1.arc(LX(player.x,0.7),LY(player.y,0.7),450,PI+PI/2,PI*2);
	ctx1.stroke();
	
	ctx1.globalAlpha = 0.05;
	ctx1.lineWidth = 35;
	ctx1.beginPath(); 
	ctx1.arc(LX(player.x,0.5),LY(player.y,0.5),300,0,PI*2);
	ctx1.stroke();
	
	ctx1.save();
	ctx1.translate(LX(player.x,0.5),LY(player.y,0.5));
	ctx1.textAlign = "center";
	ctx1.globalAlpha = 0.25; ctx1.font = "Bold 15px Arial";
	x = (200*(player.xspeed/tsp)); y = (200*(player.yspeed/tsp));
	ctx1.fillText(((tsp*60)/10).toFixed(1)+" m/s",x+100,y);
	//ctx1.fillText("X: "+((player.x/10)/1000).toFixed(1)+"km",300,0);
	//ctx1.fillText("Y: "+((player.y/10)/1000).toFixed(1)+"km",300,50);
	ctx1.globalAlpha = player.modeo;
	ctx1.fillText(player.modestr,0,-200);
	ctx1.restore();
}

function drawCursor(){
	ctx1.fillStyle = hudc; ctx1.strokeStyle = hudc;
	ctx1.globalAlpha = 0.5;
	ctx1.beginPath();
	ctx1.arc(mouse.x,mouse.y,1,0,PI*2);
	ctx1.fill();
	
	ctx1.save();
	ctx1.translate(mouse.x1,mouse.y1);
	ctx1.rotate(mouse.r);
	
	ctx1.lineWidth = 6;
	ctx1.beginPath(); 
	ctx1.arc(0,0,17,-0.3,0.3);
	ctx1.stroke();
	ctx1.beginPath(); 
	ctx1.arc(0,0,17,-0.3+2*PI/3,0.3+2*PI/3);
	ctx1.stroke();
	ctx1.beginPath(); 
	ctx1.arc(0,0,17,-0.3+4*PI/3,0.3+4*PI/3);
	ctx1.stroke();
	
	ctx1.restore();
	
	ctx1.globalAlpha = 0.25;
	
	ctx1.save();
	ctx1.translate(mouse.x2,mouse.y2);
	ctx1.rotate(Math.atan2( (LY(player.y)-mouse.y2),(LX(player.x)-mouse.x2) ));
	
	ctx1.lineWidth = 10;
	ctx1.beginPath(); 
	ctx1.arc(0,0,40,-0.5,0.5);
	ctx1.stroke();
	ctx1.beginPath(); 
	ctx1.arc(0,0,40,PI-0.5,PI+0.5);
	ctx1.stroke();
	
	ctx1.restore();
	ctx1.globalAlpha = 1;
}

function click(){
	player.fire = true;
};

function rightclick(){
	vel = 0.5;
	xv = (Math.floor(Math.random()*vel)-(vel/2)); yv = (Math.floor(Math.random()*vel)-(vel/2)); rv = (Math.floor(Math.random()*4)-2)/100;
	var rock = new Obj("rock",spr_rock[Math.floor(Math.random()*spr_rock.length)],GX(mouse.x),GY(mouse.y),xv,yv,0,rv); objects.push(rock);
}

function gotoS(star){
	player.x = star.x; player.y = star.y;
}

function equation1(x){
	return x/Math.sqrt(x);
}


function Obj(id,spr,x,y,xv,yv,r,rv){
	this.x = x; this.y = y; this.xspeed = xv; this.yspeed = yv;
	this.r = r; this.rspeed = rv;
	this.spr = spr;
	this.id = id;
}

$('#C1').mousedown(function(e) {
	switch (e.which) {
		case 1: //Left mouse button
			mouse.lclick = true;
			click();
			break;
		case 2: //Middle mouse button
			mouse.mclick = true;
			break;
		case 3: //Right mouse button
			mouse.rclick = true;
			rightclick();
			break;
	}
});
$('#C1').mouseup(function(e) {
	switch (e.which) {
		case 1: //Left mouse button
			mouse.lclick = false;
			player.fire = false;
			break;
		case 2: //Middle mouse button
			mouse.mclick = false;
			break;
		case 3: //Right mouse button
			mouse.rclick = false;
			break;
	}
});

window.onkeydown = function (e){
	key = e.keyCode ? e.keyCode : e.which;
	if( key == 27 ){ if( game.pause == false ){ game.pause = true }else{ game.pause = false }; }
	if( game.pause == false && game.view == 1 ){
		switch(key){
			case 13: if( player.aimlock == false ){ player.aimlock = true }else{ player.aimlock = false }; break;
			case 66: if( player.rocketlock == false ){ player.rocketlock = true }else{ player.rocketlock = false }; break;
			case 82: if( player.radar == true ){ player.modestr = "Radar Disabled"; player.radar = false }else{ player.modestr = "Radar Enabled"; player.radar = true }; player.modeo = 1; break;
			case 32: keys.space = true; if( player.rocketlock == true ){ player.rocketlock = false }; break;
			case 107: if( player.mode < 3 ){
				player.mode ++; player.modeo = 1;
				switch( player.mode ){	
					case 1: player.modestr = "Cruising speed"; break;
					case 2: player.modestr = "Planetary speed"; break;
					case 3: player.modestr = "Stellar speed"; break;
					default: player.modestr = "Base speed"; break;
				}; 
			} break;
			case 109: if( player.mode > 0    ){
				player.mode --; player.modeo = 1;
				switch( player.mode ){	
					case 1: player.modestr = "Cruising speed"; break;
					case 2: player.modestr = "Planetary speed"; break;
					case 3: player.modestr = "Stellar speed"; break;
					default: player.modestr = "Base speed"; break;
				}; 
			} break;
			default: break;
		};
	}
}
window.onkeyup = function (e){
	key = e.keyCode ? e.keyCode : e.which;
	if( game.pause == false && game.view == 1 ){
		switch(key){
			case 32: keys.space = false; break;
		}
	}
}
window.oncontextmenu = function(){
	return false;
};
C1.addEventListener('mousemove', function(evt) {
		//When the mouse is moved
		var rekt = C1.getBoundingClientRect();
		mouse.x = evt.clientX - rekt.left;
		mouse.y = evt.clientY - rekt.top;
}, false);

 $('#C1').bind('DOMMouseScroll', function(e){
     scroll(e.originalEvent.detail);

     //prevent page fom scrolling
     return false;
 });

 //IE, Opera, Safari
 $('#C1').bind('mousewheel', function(e){
     scroll(e.originalEvent.wheelDelta);
	 
     //prevent page fom scrolling
     return false;
 });
 
 function scroll( e ){
	if( game.pause == false && game.view == 1 ){
		if(e < 0) {
			 //scroll down
			 if( player.speed > 0+1 ){ player.speed = Math.floor((player.speed+1)/1.1)-2 }if( player.speed < 2 ){ player.speed = 0 }
		}else {
			 //scroll up
			 if( player.speed < player.mspeed-1 ){ player.speed = Math.floor((player.speed+1)*1.1)+2 } if( player.speed >= player.mspeed ){ player.speed = player.mspeed; }
		}
	}
 }

function LX(x,n){
	zoom = 1; tsp = (Math.abs(player.xspeed)+Math.abs(player.yspeed));
	if( typeof n == "number"){ zoom = n };
	off = (  player.offset*(  (player.xspeed/(tsp+1))/(1)  )  );
	return ((x-player.x-off+(shake*((Math.random()*4)-2))-((mouse.x2-(C1.width/2))/2.5))*zoom)+(C1.width/2);
}
function LY(y,n){
	zoom = 1; tsp = (Math.abs(player.xspeed)+Math.abs(player.yspeed));
	if( typeof n == "number"){ zoom = n };
	off = (  player.offset*(  (player.yspeed/(tsp+1))/(1)  )  );
	return ((y-player.y-off+(-shake*((Math.random()*4)-2))-((mouse.y2-(C1.height/2))/2.5))*zoom)+(C1.height/2);
}
function GX(x){
	return x+player.x+((mouse.x2-(C1.width/2))/2.5)-(C1.width/2);
}
function GY(y){
	return y+player.y+((mouse.y2-(C1.height/2))/2.5)-(C1.height/2);
}