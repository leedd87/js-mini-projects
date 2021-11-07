const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    // console.log('hello universo')
    // sideBar.classList.toggle('show-sidebar')
    if (sideBar.classList.contains('show-sidebar')) {
        sideBar.classList.remove('show-sidebar')
    }
    else {
        sideBar.classList.add('show-sidebar')
    }
})

closeBtn.addEventListener('click', () => {
    console.log('cerrando');
    sideBar.classList.remove('show-sidebar')
})