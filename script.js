const isActiveMenu = () => {
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");
    menuBtn.firstElementChild.classList.toggle("none");
    menuBtn.lastElementChild.classList.toggle("none");
    menu.classList.toggle("is-active");
    document.addEventListener("click", (e) => {
        if (!e.target.matches(".menu a")) return false;
        menu.classList.remove("is-active");
        menuBtn.firstElementChild.classList.remove("none");
        menuBtn.lastElementChild.classList.add("none");
    })
}
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", isActiveMenu);

//  Funcion obtener los valores del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    console.log('Nombre:', name);
    console.log('Correo:', email);
    console.log('Mensaje:', message);

    document.getElementById('user-name').textContent = name;
    document.getElementById('thanks').style.opacity = '1';

    setTimeout(() => {
        document.getElementById('thanks').style.opacity = '0';
    }, 5000);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
