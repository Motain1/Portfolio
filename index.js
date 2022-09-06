//template_gm39jin
//service_78lb4hh
//user id - UZjC-tfQw7m4ACL6i
const scaleFactor = 1/20;
function moveBackground(event){
    const shape =document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i=0; i<shape.length; i++){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shape[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}


let contrastToggle = false;

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal_overlay-loading');
    const success = document.querySelector('.modal_overlay-success');
    loading.classList += " modal_overlay-visible"
    emailjs.sendForm(
        'service_78lb4hh',
        'template_gm39jin',
        event.target,
        'UZjC-tfQw7m4ACL6i'
    ).then(() => {
        loading.classList.remove("modal_overlay-visible")
        success.classList +=" modal_overlay-visible"
    }).catch(() => {
        loading.classList.remove("modal_overlay-visible")
        alert(
            "The email service is temporarily unavaible. Please contact me directly on Jacksontfry@gmail.com "
        );
    })
}

let isModalOpen = false;
function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal-open")
    }
    isModalOpen = true;
    document.body.classList += " modal-open"

}