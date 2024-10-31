const form = document.getElementById("registrationForm")
const mail = document.getElementById("email")

if(form){
    form.addEventListener('submit', function(event){
        event.preventDefault()
        localStorage.setItem('showAlert', 'true')
        window.location.href('index.html')
    })
}

window.addEventListener('load', function(){
    let state = localStorage.getItem('showAlert')
    if(state === 'true'){
        alert('Вы успешно вошли')
        localStorage.removeItem('showAlert')
    }
})