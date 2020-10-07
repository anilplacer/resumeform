// 1. Alphabet Only
function allowOnlyLetters(e, t) {
   if (window.event) {
      var charCode = window.event.keyCode;
   }
   else if (e) {
      var charCode = e.which;
   }
   else { return true; }
   if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
      return true;
   else {
      alert("Please enter only alphabets");
      return false;
   }
}


// 2. Numbers Only 
function isNumber(evt) {
   var iKeyCode = (evt.which) ? evt.which : evt.keyCode
   if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
      return false;

   return true;
}


// 3. Image Only 
function fileValidation() {
   var fileInput =
      document.getElementById('file');

   var filePath = fileInput.value;

   // Allowing file type 
   var allowedExtensions =
      /(\.jpg|\.jpeg|\.png)$/i;

   if (!allowedExtensions.exec(filePath)) {
      alert('Error! Please Upload JPG or PNG Image Only');
      fileInput.value = '';
      return false;
   }
   else {
      // Image preview 
      if (fileInput.files && fileInput.files[0]) {
         var reader = new FileReader();
         reader.onload = function (e) {
            document.getElementById(
               'imagePreview').innerHTML =
               '<img src="' + e.target.result
               + '"/>';
         };

         reader.readAsDataURL(fileInput.files[0]);
      }
   }
}


// 4. Switch Case
var citiesByState = {
   Arunachal: ["Itanagar"],
   Orissa: ["Balangir", "Baleshwar", "Baripada", "Bhubaneshwar", "Brahmapur", "Cuttack", "Dhenkanal", "Keonjhar", "Konark", "Koraput", "Paradip", "Phulabani", "Puri", "Sambalpur", "Udayagiri"],
   Maharashtra: ["Mumbai", "Pune", "Nagpur"],
   Delhi: ["New Delhi", "Delhi"],
   Gujarat: ["Ahmadabad", "Amreli", "Bharuch", "Bhavnagar", "Bhuj", "Dwarka", "Gandhinagar", "Godhra", "Jamnagar", "Junagadh", "Kandla", "Khambhat", "Kheda", "Mahesana", "Morvi", "Nadiad", "Navsari", "Okha", "Palanpur", "Patan", "Porbandar", "Rajkot", "Surat", "Surendranagar", "Valsad", "Veraval"],
   Kerala: ["Alappuzha", "Badagara", "Idukki", "Kannur", "Kochi", "Kollam", "Kottayam", "Kozhikode", "Mattancheri", "Palakkad", "Thalassery", "Thiruvananthapuram", "Thrissur"]
}
function makeSubmenu(value) {
   if (value.length == 0) document.getElementById("citySelect").innerHTML = "<option></option>";
   else {
      var citiesOptions = "";
      for (cityId in citiesByState[value]) {
         citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
      }
      document.getElementById("citySelect").innerHTML = citiesOptions;
   }
}
function displaySelected() {
   var country = document.getElementById("countrySelect").value;
   var city = document.getElementById("citySelect").value;
   alert(country + "\n" + city);
}
function resetSelection() {
   document.getElementById("countrySelect").selectedIndex = 0;
   document.getElementById("citySelect").selectedIndex = 0;
}
