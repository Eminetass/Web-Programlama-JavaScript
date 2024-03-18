/**
 Klavyeden girilen üç sayının büyükten küçüğe doğru sıralandıran program.
 */
const bilgiSatırı="Üçlü sıralalama burada gösterilir...";

function ucluSirala(){
	var birinciSayi,ikinciSayi,ucuncuSayi;
	var buyuk,orta,kucuk;
	
	birinciSayi = document.getElementById("input-1").value;
	ikinciSayi = document.getElementById("input-2").value;
	ucuncuSayi = document.getElementById("input-3").value;
	
	//Birinci Sayi ile ikinci sayiyi karşılaştır .
	if(birinciSayi>ikinciSayi){
		buyuk = birinciSayi;
		kucuk = ikinciSayi;
	}else{
		buyuk = ikinciSayi;
		kucuk = birinciSayi;
	}
	
	//üçüncü sayıyı karşılaştırıp yerleştirme
	if(ucuncuSayi>buyuk){
		orta = buyuk;
		buyuk = ucuncuSayi;
	}else if(ucuncuSayi>kucuk)
		   orta=ucuncuSayi;
	else{
			orta=kucuk;
			kucuk =ucuncuSayi;
	}
	document.getElementById("p-1").innerHTML=buyuk + " ," + orta + " ," + kucuk;
}
function sayfaYukle(){
	// alert("Şu anda belgenin onload(); yöntemi içerisindeyim...");
	document.getElementById("p-1").innerHTML=bilgiSatırı;
}
function temizle(){
	document.getElementById("input-1").value="";
	document.getElementById("input-2").value="";
	document.getElementById("input-3").value="";
	document.getElementById("p-1").innerHTML=bilgiSatırı;
}