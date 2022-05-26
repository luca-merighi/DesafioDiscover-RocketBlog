function openOrCloseSidebar() {
    const body = document.querySelector('body')
    const sidebar = document.querySelector('#sidebar')
    const menuIcon = document.querySelector('.menu-icon')
    const closeIcon = document.querySelector('.close-icon')

    sidebar.classList.toggle('hide')
    body.classList.toggle('lock-scroll')
    menuIcon.classList.toggle('hide')
    closeIcon.classList.toggle('hide')
}

const toggleSidebarIcons = document.querySelector('.toggle-sidebar-icons')
toggleSidebarIcons.addEventListener('click', () => {
    openOrCloseSidebar()
})

toggleSidebarIcons.addEventListener('keyup', (event) => {
    if(event.keyCode == 13) {
        openOrCloseSidebar()
    }
})