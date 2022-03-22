const table = document.getElementById("table-data");

function getNewData() {
    let newData = {
        nama: "",
        tanggal: "",
        jenisKelamin: "",
        hobi: [],
        agama: "",
        pesan: ""
    };
    newData['nama'] = document.getElementById("nama").value;
    newData['tanggal'] = document.getElementById("tanggal").value;
    let jenisKelamin = document.getElementsByName("jenis-kelamin");
    for(let i = 0; i < jenisKelamin.length; i++) {
        if(jenisKelamin[i].checked) {
            newData['jenisKelamin'] = jenisKelamin[i].value;
        }
    }
    let hobi = document.getElementsByName("hobi");
    for(let i = 0; i < hobi.length; i++) {
        if(hobi[i].checked) {
            newData['hobi'].push(hobi[i].value);
        }
    }
    newData['agama'] = document.getElementById("agama").value;
    newData['pesan'] = document.getElementById("pesan").value;
    console.log(newData);
    return newData;
}

function resetForm(){
    document.getElementById("nama").value = "";
    document.getElementById("tanggal").value = "";
    const jenisKelamin = document.getElementsByName("jenis-kelamin");
    for(let i = 0; i < jenisKelamin.length; i++){
        jenisKelamin[i].checked = false;
    }
    const hobi = document.getElementsByName("hobi");
    for(let i = 0; i < hobi.length; i++) {
        hobi[i].checked = false;
    }
    let agama = document.getElementById("agama");
    document.getElementById("agama").selectedIndex = agama;
    document.getElementById("pesan").value = "";
}

function insertData(){
    const newData = getNewData();
    const table = document.getElementById("table-data");
    const body = document.createElement("tbody");
    body.innerHTML = `
    <tr>
        <th>Nama</th>
        <td>:</td>
        <td>${newData['nama']}</td>
    </tr>
    <tr>
        <th>Tanggal</th>
        <td>:</td>
        <td>${newData['tanggal']}</td>
    </tr>
    <tr>
        <th>Jenis Kelamin</th>
        <td>:</td>
        <td>${newData['jenisKelamin']}</td>
    </tr>
    <tr>
        <th>Hobi</th>
        <td>:</td>
        <td>${newData['hobi'].join(', ')}</td>
    </tr>
    <tr>
        <th>Agama</th>
        <td>:</td>
        <td>${newData['agama']}</td>
    </tr>
    <tr>
        <th>Pesan</th>
        <td>:</td>
        <td>${newData['pesan']}</td>
    </tr>
    `
    table.appendChild(body);
    resetForm();
}

document.getElementById("btn-submit").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("show-data").removeAttribute("style");
    insertData();
} );