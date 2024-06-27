function validateForm() {
    var name = document.getElementById('name').value.trim();
    var package = document.getElementById('package').value;
    var address = document.getElementById('address').value.trim();
    var instagram = document.getElementById('instagram').value.trim();
    var facebook = document.getElementById('facebook').value.trim();
    var dateInput = document.getElementById('date');
    var dateValue = new Date(dateInput.value);
    var ktpInput = document.getElementById('ktp');
  
    if (name === "" || package === "" || address === "" || instagram === "" || facebook === "" || isNaN(dateValue.getTime()) || ktpInput.files.length === 0) {
      if (name === "") {
        alert("Nama harus diisi");
        return false;
      } else if (package === "") {
        alert("Paket harus dipilih");
        return false;
      } else if (address === "") {
        alert("Alamat harus diisi");
        return false;
      } else if (instagram === "") {
        alert("Akun Instagram harus diisi");
        return false;
      } else if (facebook === "") {
        alert("Akun Facebook harus diisi");
        return false;
      } else if (isNaN(dateValue.getTime())) {
        alert("Tanggal tidak valid");
        return false;
      } else if (ktpInput.files.length === 0) {
        alert("Silakan pilih file KTP");
        return false;
      }
    }
  
    return true;
  }
  