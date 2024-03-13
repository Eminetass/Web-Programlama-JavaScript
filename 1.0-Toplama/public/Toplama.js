/**
 Ornek-1: Toplama,JacaScript işlevleri burada tutulur. 
 */
function topla(){
	var birincisayi= +document.getElementById("input-1").value;
	var ikincisayi = +document.getElementById("input-2").value;
	var toplam;
	
	toplam=birincisayi + ikincisayi;
	document.getElementById("p-1").innerHTML=toplam;
}