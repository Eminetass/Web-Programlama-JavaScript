/**
 * 
 */
const ogrenciNumaralari=[427614, 427615, 427616, 427617, 427618, 427619, 427620, 427621, 427622, 427623];
const ogrenciAdlari=[" Emine", "Ahmet", "Ali", "Ayşe", "Melek", "Meryem", "Berivan", "Elif", "Berke", "Nazlı"];

var ogrenciSayisi; 

function sayfaYukle(){
	var minOgrenciNumarasi = Math.min(...ogrenciNumaralari);
	var maxOgrenciNumarasi = Math.max(...ogrenciNumaralari);
	ogrenciSayisi = ogrenciNumaralari.length;
	document.getElementById("input-1").setAttribute("min",minOgrenciNumarasi);
	document.getElementById("input-1").setAttribute("max",maxOgrenciNumarasi);
	document.getElementById("input-2").setAttribute("min",1);
    document.getElementById("input-2").setAttribute("max",ogrenciSayisi);
    console.log("Öğrenci Sayımız: "+diziBoyu);
}
function numaradanBul(){
	var bulunacakOgrenciNumarasi = ~~document.getElementById("input-1").value;
	var ogrenciSirasi = ogrenciNumaralari.indexOf(bulunacakOgrenciNumarasi);
	var spanNesnesi = document.getElementById("span-1");
	spanNesnesi.innerHTML=bulunacakOgrenciNumarasi;
	
	if(ogrenciSirasi == -1)
	   spanNesnesi.innerHTML += bulunacakOgrenciNumarasi + "Bulunamadı...";
	else
	   spanNesnesi.innerHTML += "," + ++ogrenciSirasi + ".Sırada...";

}
function siradanBul(){
	var bulunacakOgrenciSirasi = ~~document.getElementById("input-2").value;
	var spanNesnesi = document.getElementById("span-2");
	spanNesnesi.innerHTML = bulunacakOgrenciSirasi;
	if((bulunacakOgrenciSirasi < 1) || (bulunacakOgrenciSirasi > ogrenciSayisi))
	   spanNesnesi.innerHTML = "sıralı öğrenci mevcut değildir...";
	else{
		var ogrenciNumarasi = ogrenciNumaralari[bulunacakOgrenciSirasi - 1];
		var ogrenciAdi = ogrenciAdlari[bulunacakOgrenciSirasi - 1];
		spanNesnesi.innerHTML += "-)" + ogrenciNumarasi;
		spanNesnesi.innerHTML += "," +ogrenciAdi;
	}
}

