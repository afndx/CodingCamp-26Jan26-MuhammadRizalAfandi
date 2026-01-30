function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    timeElement.textContent = now.toString();
  }
}

setInterval(updateTime, 1000);
updateTime();

const messageForm = document.getElementById("messageForm");
if (messageForm) {
  messageForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("pesan").value;

    const date = new Date(tanggalLahir);
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;

    document.getElementById("outputNama").textContent = nama;
    document.getElementById("outputTanggal").textContent = formattedDate;
    document.getElementById("outputGender").textContent = gender;
    document.getElementById("outputPesan").textContent = pesan;
  });
}
