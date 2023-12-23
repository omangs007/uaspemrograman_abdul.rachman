 // Menggunakan Alert
 alert("Halo! Selamat datang di program JavaScript");
    
 // Menggunakan Prompt
 let name = prompt("Masukkan nama Anda:", "Your Name");
 alert("Halo, " + name + "!");

 // Menggunakan Confirm
 let isAdult = confirm("Apakah Anda sudah dewasa?");
 let message = isAdult ? "Selamat datang di situs untuk dewasa." : "Maaf, Anda belum bisa mengakses situs ini.";
 alert(message);

 // Menggunakan Form
 document.write("<h2>Formulir</h2>");
 document.write("<form id='myForm'>");
 document.write("   <label for='firstName'>Nama Depan:</label>");
 document.write("   <input type='text' id='firstName' name='firstName' required><br>");
 document.write("   <label for='lastName'>Nama Belakang:</label>");
 document.write("   <input type='text' id='lastName' name='lastName' required><br>");
 document.write("   <button type='button' onclick='submitForm()'>Kirim</button>");
 document.write("</form>");

 function submitForm() {
     let firstName = document.getElementById('firstName').value;
     let lastName = document.getElementById('lastName').value;
     alert("Terima kasih, " + firstName + " " + lastName + ", formulir Anda telah terkirim!");
     document.getElementById('myForm').reset();
 }