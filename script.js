function tampilkanData() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const jurusan = document.getElementById("jurusan").value;
  const tanggal = document.getElementById("tanggal").value;
  const mainCCO = document.getElementById("maincco").value;

  const hasil = `
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>NIM:</strong> ${nim}</p>
    <p><strong>Jurusan:</strong> ${jurusan}</p>
    <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
    <p><strong>Main CCO:</strong> ${mainCCO}</p>
  `;

  document.getElementById("hasil").innerHTML = hasil;
}
