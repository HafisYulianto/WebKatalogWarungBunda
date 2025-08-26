function periksaStatusCheckbox(){
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    var adaDicenntang = false;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked){
            adaDicenntang = true
        }
    });

    if (adaDicenntang) {
        document.getElementById("pesanSekarang").style.display = "block";
    } 
    else {
        document.getElementById("pesanSekarang").style.display = "none";
    }
}

var checkboxes = document.querySelectorAll('input[type=checkbox]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', periksaStatusCheckbox);
})

function kirimKeWhatsApp() {
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    var pesan = "Pesanan :\n";
    var nomerku = 6282184117257

    checkboxes.forEach(function(checkbox) {
        var label = checkbox.parentNode.querySelector('span').innerText;
        var harga = checkbox.parentNode.querySelector('.text-primary').innerText;

        pesan += label + " - " + harga + "\n";
    })

    pesan += "\nNote: Edit Jika Belum Sesuai, Pesanan Yang Salah Bukan Tanggung Jawab Kami"

    window.open(`https://wa.me/${nomerku}?text=` + encodeURIComponent(pesan))
}