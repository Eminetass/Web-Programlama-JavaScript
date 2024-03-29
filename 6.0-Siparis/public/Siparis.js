/**
 * 
 */
const bilgiIletisi = "Şiparişleriniz burada görüntülenir...";
const tesekkurIfadesi = "Teşekkür ederiz...";
const sabitSiparisAdedi =10;
const adetSabit="ADET";
const onSabit="ON";

function sayfaYukle(){
	document.getElementById("p-1").innerHTML = bilgiIletisi;
}

function adetSiparis(){
	var urun = document.getElementById("input-1").value;
	var siparisAdedi;
	var geciciDizgi = tesekkurIfadesi;
	var donguDenetim;
	
	switch(argument[0]){
		case adetSabit:
			siparisAdedi = ~~document.getElementById("input-2").value;
			break;
		case onSabit:
			siparisAdedi = sabitSiparisAdedi;
			break;
		default:
			alert("Hatalı sipariş adedi girişi...");		
	}
	if(siparisAdedi <1)
	   siparisAdedi=1;
	
	for(donguDenetim = 0; donguDenetim < siparisAdedi; donguDenetim++)
	   geciciDizgi += " "+urun;   
	
	document.getElementById("p-1").innerHTML = geciciDizgi;   
}

function onSiparis(){
	var sipariAdedi = 10;
	var urun = document.getElementById("input-1").value;
	var donguDenetim;
	var geciciDizgi = girisIletisi;
	
	for(donguDenetim=0; donguDenetim<sipariAdedi ; donguDenetim)
	   geciciDizgi += urun + " ";
	document.getElementById("p-1").innerHTML = geciciDizgi;
}

function temizle(){
	document.getElementById("input-1").value ="";
	document.getElementById("input-2").value ="";
    document.getElementById("p-1").innerText =bilgiIletisi;
}
