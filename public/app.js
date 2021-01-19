window.onload = ()=>{
    const sidebarClassName="with-sidebar"
    document.querySelector('#header__icon').addEventListener('click', (e) => {
        e.preventDefault()
          document.querySelector('body').classList.toggle(sidebarClassName)
    }) 
}