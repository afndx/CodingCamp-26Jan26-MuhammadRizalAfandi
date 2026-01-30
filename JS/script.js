// Update Time Function
function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    timeElement.textContent = now.toString();
  }
}

setInterval(updateTime, 1000);
updateTime();

// Message Form Handler
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

window.addEventListener("load", function () {
  const currentPage = window.location.pathname;
  const isHomePage =
    currentPage.endsWith("index.html") || currentPage.endsWith("/");

  if (!isHomePage) {
    return;
  }

  const modalHTML = `
    <div class="modal fade" id="namaModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Welcome!</h5>
          </div>
          <div class="modal-body">
            <label for="inputNama" class="form-label">Siapa nama Anda?</label>
            <input type="text" class="form-control" id="inputNama" placeholder="Masukkan nama Anda">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Skip</button>
            <button type="button" class="btn btn-primary" id="submitNama">Submit</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const namaModal = new bootstrap.Modal(document.getElementById("namaModal"));
  namaModal.show();

  document.getElementById("submitNama").addEventListener("click", function () {
    const namaPengunjung = document.getElementById("inputNama").value;

    if (namaPengunjung && namaPengunjung.trim() !== "") {
      const heroTitle = document.querySelector(".hero h1");
      if (heroTitle) {
        heroTitle.textContent = `Hi ${namaPengunjung.trim()}, Welcome To Blind Matez Official Website`;
      }
    }

    namaModal.hide();
  });

  document
    .getElementById("inputNama")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        document.getElementById("submitNama").click();
      }
    });
});
