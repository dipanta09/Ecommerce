const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closebtn = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (closebtn) {
    closebtn.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


let form = document.getElementById('contact-form');
let fullname = document.getElementById('fName');
let mail = document.getElementById('mail');


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    if(fullname.value==='')
    {
        error1.innerHTML="This field is empty"
    }
    else
    {
        error1.innerHTML=""
    }
    if(mail.value==='')
{
    error2.innerHTML="This field is empty"
}
else{
    error2.innerHTML=""
}
})


