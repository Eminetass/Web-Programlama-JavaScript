/**
 * 
 */
const bilgiDizgisi = "Faktoriyel degeri burada gösterilir...";

function faktoriyel(n){
	switch(n){
		case 0:case 1:
			return 1;
		default:
			return(n * faktoriyel(n-1));	
	}
}
function faktoriyelOzyineli(){
	var deger = ~~document.getElementById("input-1").value;
	document.getElementById("input-2").value = deger +" değerinin ,(özyineli) Faktöriyeli "
	
}
function temizle(){
	
	
}
function sayfaYukle(){
	
	
	
}