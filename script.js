var activeItem = ''

const menuItems = document.querySelectorAll('nav ul li')
menuItems.forEach(item => {
    item.addEventListener('click', event => {
        let element;
        if (event.path[0].nodeName !== 'LI') {
            element = event.path[0].parentElement
        } else {
            element = event.path[0]
        }

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
    })
})