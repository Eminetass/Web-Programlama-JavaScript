/**
 Klavyeden girilen sayıya kadar ollan fibonacci dizisini yazan program . 
 */
const bilgiSatırı=" Fibonacci sayıları burada listelenir...";

function fibonacci(){
	var sayiAdedi = ~~document.getElementById("input-1").value; 
	var ikiOnce , birOnce, fibonacci;
	var geciciDizgi = "";
	var donguDenetim;
	
	if(sayiAdedi < 3)
 	   alert("Lütfen en az 3 değer giriniz.İlk iki fibonacci sayısı: 1,1'dir.");
 	else{
		 geciciDizgi= "İlk "+sayiAdedi+" adet fibonacci sayısı 1,1";
		 ikiOnce = 1;
		 birOnce = 1;
		 
		 for( donguDenetim = 0; donguDenetim < sayiAdedi - 2; donguDenetim++){
			 fibonacci=birOnce + ikiOnce;
			 ikiOnce = birOnce;
			 birOnce = fibonacci;
			 geciciDizgi = geciciDizgi + "," +fibonacci;
		 }
		 document.getElementById("p-1").innerHTML = geciciDizgi;
	 }
}

function sayfaYukle(){
	document.getElementById("p-1").innerHTML = bilgiSatırı;
	document.getElementById("button-2").disabled=true;
}

function veriGirisi(){
	if(document.getElementById("button-2").disabled)
	  document.getElementById("button-2").disabled = false;
}

function temizle(){
	document.getElementById("input-1").value ="";
	document.getElementById("p-1").innerHTML =bilgiSatırı;
	document.getElementById("button-2").disabled =true;
}