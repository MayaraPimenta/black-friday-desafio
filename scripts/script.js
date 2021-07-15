function submit() {
    const username = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
        
    let usersLocalStorage = JSON.parse(localStorage.getItem('users'));
    let users = usersLocalStorage == null ? [] : usersLocalStorage;

    if (users.some(user => user.email == email)) {
        swal({
            text: "Email já cadastrado!",
            button: false
        })} else if (username === "" || email === "") {
        swal({
            text: "O Nome ou E-mail está em branco!",
            button: false
        })} else {

    user = {
        id: users.length + 1,
        name: username,
        email: email,
    }
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))

    swal({
        text: "E-mail cadastrado!",
        button: false
    })

    cleanField()
    }
}

function cleanField() {
   document.querySelector('#name').value = ""
   document.querySelector('#email').value = ""
}