//template_gm39jin
//service_78lb4hh
//user id - UZjC-tfQw7m4ACL6i

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