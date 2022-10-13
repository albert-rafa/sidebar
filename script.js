var activeItem = ''
var sidebarOpen = true

const menuItems = document.querySelectorAll('nav ul li')
menuItems.forEach(element => {
    if (element.id !== 'menu') {
        element.addEventListener('click', event => {
            if (activeItem) {
                const item = document.querySelector(`#${activeItem}`)
                item.style.backgroundColor = 'var(--green)'
                element.style.backgroundColor = 'var(--light-green)'
                activeItem = element.id
            } else {
                element.style.backgroundColor = 'var(--light-green)'
                activeItem = element.id
            }
    
            const menu = document.querySelector('main h1')
            menu.innerText = element.id[0].toUpperCase() + element.id.slice(1)

            console.log(element.id)
        })
    }
})

const menuButton = document.querySelector('#menu-button')
menuButton.addEventListener('click', () => {
    const info = document.querySelectorAll('.info')
    const element = Object.entries(info).map(i => {
        if (i[1].parentElement.nodeName === 'LI') {
            return i[1].parentElement
        }
        return null
    })

    info.forEach(item => {
        item.classList.toggle('hidden', sidebarOpen)
    })

    element.forEach(item => {
        if (item) {
            if (sidebarOpen) {
                item.style.width = 'fit-content'
                item.style.padding = '16px'
            } else {
                item.style.width = '90%'
                item.style.padding = '16px 8px'
            }
        }
    })

    const menuList = document.querySelector('nav ul')
    const navbar = document.querySelector('nav')
    if (sidebarOpen) {
        menuList.style.width = 'fit-content'
        navbar.style.minWidth = '66px'
        navbar.style.maxWidth = '90px'
        navbar.style.width = '10%'
    } else {
        menuList.style.width = '90%'
        navbar.style.minWidth = '200px'
        navbar.style.maxWidth = '278px'
        navbar.style.width = '20%'
    }

    sidebarOpen = !sidebarOpen
})

const logoutButton = document.querySelector('.logout-image')
logoutButton.addEventListener('click', () => {
    console.log('logout')
})