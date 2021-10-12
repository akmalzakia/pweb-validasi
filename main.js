function validateForm() {
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        swal({
            title: "Nama tidak boleh kosong",
            icon: 'warning',
            confirmationButtonColor: '#3085d6'

        })
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if(document.forms["formPendaftaran"]["nrp"].value == ""){
        swal({
            title: "NRP tidak boleh kosong",
            icon: 'warning',
            confirmationButtonColor: '#3085d6'

        })
        document.forms["formPendaftaran"]["nrp"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        swal({
            title: "Email tidak boleh kosong",
            icon: 'warning',
            confirmationButtonColor: '#3085d6'

        })
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["fakultas"].value === '') {
        swal({
            title: "Fakultas tidak boleh kosong",
            icon: 'warning',
            confirmationButtonColor: '#3085d6'

        })
        document.forms["formPendaftaran"]["fakultas"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["jurusan"].value === '') {
        swal({
            title: "Jurusan tidak boleh kosong",
            icon: 'warning',
            confirmationButtonColor: '#3085d6'
        })
        document.forms["formPendaftaran"]["jurusan"].focus();
        return false;
    }

    swal({
        title: "Berhasil Tersimpan",
        icon: 'success',
        confirmationButtonColor: '#3085d6'
    })

    return false;
}


const fakultasObj = {
    electics: ["Informatics", 'Information Systems', 'Information Technology', 'Computer Engineering', 'Biomedical Engineering', 'Electrical Engineering'],
    indsys: ['Mechanical Engineering', 'Chemical Engineering', 'Physics Engineering', 'Systems and Industrial Engineering', 'Material Engineering'],
    civplan: ['Civil Engineering', 'Architecture','Environmental Engineering', 'Regional and Urban Planning', 'Geomatics Engineering', 'Geophysics Engineering'],
    scientics: ['Physics', 'Mathematics', 'Statistics', 'Chemistry', 'Biology', 'Actuaria'],
    martech: ['Naval Architecture and Shipbuilding Engineering', 'Marine Engineering', 'Ocean Engineering', 'Sea Transportation Engineering'],
    creabiz: ['Industrial Product Design', 'Interior Design', 'Visual Communication Design', 'Business Management', 'Developmental Studies', 'Technology Management'],
    vocation: ['Civil Infrastructure Engineering', 'Industrial Mechanical Engineering', 'Automation Electronic Engineering', 'Industrial Chemical Engineering', 'Instrumentation Engineering', 'Business Statistics']
} 
/**
 * @type {HTMLSelectElement} formJurusan, formFakultas
 */
const formFakultas = document.querySelector('#fakultas')
formFakultas.addEventListener('change', changeJurusan)
const formJurusan = document.querySelector('#jurusan')

function changeJurusan(){
    let str = ''
    let fakultas = formFakultas.value
    let arr = []
    switch(fakultas){
        case "ELECTICS":
            arr = [...fakultasObj.electics]
            break;

        case "INDSYS":
            arr = [...fakultasObj.indsys]
            break;

        case "CIVPLAN":
            arr = [...fakultasObj.civplan]
            break;

        case "SCIENTICS":
            arr = [...fakultasObj.scientics]
            break;

        case "MARTECH":
            arr = [...fakultasObj.martech]
            break;

        case "CREABIZ":
            arr = [...fakultasObj.creabiz]
            break;

        case "VOCATION":
            arr = [...fakultasObj.vocation]
            break;
    }
    console.log(arr)

    arr.forEach((item) => str += '<option>' + item + '</option>')
    formJurusan.innerHTML = str;
}

