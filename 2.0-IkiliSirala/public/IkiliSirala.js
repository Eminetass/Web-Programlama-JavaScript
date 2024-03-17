/**
 Klavyeden Girilen İki Sayının karşılaştırılması. 
 */
/* Verileri karşılaştıracak fonksiyon  */
function karsilastir(){
	var birinciSayi,ikinciSayi;
	var geciciDizgi = "";
	
	birinciSayi = +document.getElementById("input-1").value;
	ikinciSayi  = +document.getElementById("input-2").value;
	/*  _koşullu aktarım 1. gösterim.
	if(birinciSayi == ikinciSayi)
	   geciciDizgi = birinciSayi + " = " +ikinciSayi;
	else if(birinciSayi > ikinciSayi)
	   geciciDizgi = birinciSayi + " >"+ ikinciSayi;
	else
	   geciciDizgi = ikinciSayi + ">" + birinciSayi;
	*/ 
	/*  _koşullu aktarım 2. gösterim.
	if(birinciSayi == ikinciSayi)
	   geciciDizgi = birinciSayi + " = " +ikinciSayi;
	else
	   geciciDizgi =(birinciSayi>ikinciSayi)? birinciSayi + " >"+ ikinciSayi: ikinciSayi + ">" + birinciSayi;
	*/
	geciciDizgi = (birinciSayi == ikinciSayi)? birinciSayi + "=="+ ikinciSayi:(birinciSayi > ikinciSayi)? birinciSayi + ">>" +ikinciSayi:ikinciSayi +">>"+birinciSayi;  
	document.getElementById("p-1").innerHTML=geciciDizgi;	
}

/*veri girdilerini alacak alanların temizlenmesi*/
function temizle(){
	document.getElementById("input-1").value="";
	document.getElementById("input-2").value="";
	document.getElementById("p-1").innerHTML="Karşılaştıma sonucu burada gösterilir...";
}