function profile()
{
    var isLog = sessionStorage.getItem('logged');
    var name = sessionStorage.getItem('name');
    var email = sessionStorage.getItem('email');
    var gender = sessionStorage.getItem('gender');
    var dob = sessionStorage.getItem('dob');
    if(isLog == 1){
        const id_name = document.getElementById("name");
        id_name.textContent = name;
        const id_email = document.getElementById("email");
        id_email.textContent = email;
        const id_gender = document.getElementById("gender");
        id_gender.textContent = gender;
        const id_dob = document.getElementById("dob");
        id_dob.textContent = dob;
    }
}