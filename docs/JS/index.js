window.addEventListener("load", function () {
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
      document.querySelector(".hero h1").textContent =
        `Hi ${namaPengunjung.trim()}, Welcome To Blind Matez Official Website`;
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
