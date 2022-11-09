const checkbox = document.querySelector('#tema');
const html = document.querySelector('html');

checkbox.addEventListener('click', function () {
    checkbox.checked ? html.setAttribute('data-theme', 'dark') :
        html.setAttribute('data-theme', 'winter');
});



// kita gunakan fetch dalam kita ambil data sample.txt yang sudah kita buat
fetch('https://sheetdb.io/api/v1/ak762v1vib7mk')
    // kita buat response menjadi json
    .then((response) => response.json())
    // lalu data nya kita ambil dan kita masuken ke p id output
    .then((data) => {
        // kita buat variabel output 
        let output = '';
        // kita console.log agar mengetahui apakah data nya sudah masuk atau belum
        console.log(data);
        // forEach ini adalah looping dan dinamakan user
        data.forEach((user) => {
            // kita tambahkan output-nya jangan lupa gunakan backslash `` yang di sebelah angka nomer 1
            // kita panggil id name email didapat dari users.json
            output += `
            <div class="flex flex-col w-64 min-h-[10rem] shadow-xl rounded-lg overflow-hidden ">
            <img src="${user.Gambar}" class="w-full h-full object-cover bord" />
            <h1 class="text-3xl font-semibold p-3 text-center">${user.nama}</h1>
            <h2 class="text-1xl font-semibold text-center">${user.asal}</h2>
            <p class="text-gray-400 text-center text-sm px-3">${user.deskripsi}</p>
            <h1 class="text-2xl font-semibold text-center">Rp${user.Harga}</h1>
            <span class="flex items-center mt-1 mx-auto">
               <img src="img/star.svg" alt="" />
               <img src="img/star.svg" alt="" />
               <img src="img/star.svg" alt="" />
               <img src="img/star-half-fill.svg" alt="" />
               <img src="img/star-no-fill.svg" alt="" />
            </span>

            <a href="#">
               <div class="w-full font-semibold text-center bg-slate-500 text-white p-3 mt-2 hover:bg-slate-700">
                  <p>Buy Now</p>
               </div></a
            >
         </div>
            `;
        })
        // kita panggil id output agar bisa di tampilkan ke browser saat di klik
        document.getElementById('output').innerHTML = output;
    })
    // membuat catch jadi kalau ada yang error langsung ketawan
    .catch((err) => console.log(err));