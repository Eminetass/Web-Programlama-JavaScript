/**
 * 
 */
const ogrenciNumaralari=[427614, 427615, 427616, 427617, 427618, 427619, 427620, 427621, 427622, 427623];
const ogrenciAdlari=[" Emine", "Ahmet", "Ali", "Ayşe", "Melek", "Meryem", "Berivan", "Elif", "Berke", "Nazlı"];

function sayfaYukle(){
	var cizelge = document.getElementById("table-1");
	var ogrenciSayisi = ogrenciNumaralari.length;
	
	
	/* for(let numara of ogrenciNumaralari)
	   console.log(numara);
	for(let adi of ogrenciAdlari)
	   console.log[adi]; */
	   
	for (let k = 0; k < ogrenciSayisi; k++){
		let numara = ogrenciNumaralari[k];
		let adi = ogrenciAdlari[k];
		cizelge.innerHTML += "<tr> <td>" + numara + "</td> <td>" + adi + "</td></tr>";
	}
	
	let enKucukNumara = Math.min(...ogrenciNumaralari);
	let enKucukIndis = ogrenciNumaralari.indexOf(enKucukNumara);
	let enKucukAd = ogrenciAdlari[enKucukIndis];
	document.getElementById("p-1").innerHTML = "En küçük numaralı öğrenciniz: " +" "+ enKucukNumara + "," +enKucukAd;
	let enBuyukNumara = Math.max(...ogrenciNumaralari);
	let enBuyukIndis = ogrenciNumaralari.indexOf(enBuyukNumara);
	let enBuyukAd = ogrenciAdlari[enBuyukIndis];
	document.getElementById("p-1").innerHTML += "<br>"+"En büyük numaralı öğrenciniz de: " +" "+ enBuyukNumara + "," +enBuyukAd;
}