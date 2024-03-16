/**
 * 
 */
/**
 Ornek-1.1: Dört işlwm (toplama,çıkarma,çarpmabölme),javascript işlevleri burda tutulur
 */

 /*Girilen iki sayının toplamı burda tutulur. */
 function topla(){
	var birincisayi= +document.getElementById("input-1").value;
	var ikincisayi = +document.getElementById("input-2").value;
	var toplam;
	
	toplam=birincisayi + ikincisayi;
	document.getElementById("p-1").innerHTML=toplam;
}
function cikar(){
	var birincisayi= +document.getElementById("input-1").value;
	var ikincisayi = +document.getElementById("input-2").value;
	var fark;
	
	fark=birincisayi - ikincisayi;
	document.getElementById("p-1").innerHTML=fark;
}
function carp(){
	var birincisayi= +document.getElementById("input-1").value;
	var ikincisayi = +document.getElementById("input-2").value;
	var carpim;
	
	carpim = birincisayi * ikincisayi;
	document.getElementById("p-1").innerHTML=carpim;
}
function bol(){
	var birincisayi= +document.getElementById("input-1").value;
	var ikincisayi = +document.getElementById("input-2").value;
	var bolum;
	
	bolum = birincisayi / ikincisayi;
	document.getElementById("p-1").innerHTML=bolum;
}
function temizle(){
	document.getElementById("input-1").innerText= " ";
	document.getElementById("input-2").innerText= " ";
	document.getElementById("p-1").innerHTML= "Sonuçlar Burda Gösterilir..";
}
