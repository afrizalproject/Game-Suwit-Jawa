var tanya = true;

while (tanya) {
    //menangkap pilihan player
    var p = prompt('Pilih: Gajah, Semut, Orang');

    //menangkap pilihan komputer
    //membangkitkan bil random
    var k = Math.random()
    if (k < 0.34) {
        k = 'Gajah';
    } else if (k >= 0.34 && k < 0.67) {
        k = 'Orang';
    } else {
        k = 'Semut';
    }

    //menentukan rules
    var hasil = '';
    if (p == k) {
        hasil = 'Seri';
    } else if (p == 'Gajah') {
        if (k == 'Orang') {
            hasil = 'Menang';
        } else {
            hasil = 'Kalah';
        }
    } else if (p == 'Orang') {
        if (k == 'Semut') {
            hasil = 'Menang';
        } else {
            hasil = 'Kalah';
        }
    } else if (p == 'Semut') {
        if (k == 'Gajah') {
            hasil = 'Menang';
        } else {
            hasil = 'Kalah';
        }
    } else {
        hasil = 'Memasukkan Piihan yang Salah';
    }

    //tampilan hasilnya
    alert('Kamu memilih: ' + p + ' dan Komputer memilih: ' + k + ' \n maka hasilnya: Kamu ' + hasil);
    tanya = confirm('Lanjut Main?');
}

alert('Terimakasih Sudah Bermain :)');