function kirimPesan() {
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let pesan = document.getElementById('pesan').value;

    if(nama === "" || email === "" || pesan === "") {
        alert("Semua form harus diisi!");
        return;
    }

    let mailtoLink = `mailto:vincentiusnm@gmail.com?subject=Pesan dari ${nama}&body=${pesan}%0A%0AEmail: ${email}`;
    window.location.href = mailtoLink;

    alert("Pesan berhasil dikirim!\nTerima kasih, " + nama + "!");
}
