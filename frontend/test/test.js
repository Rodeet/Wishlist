function openDescription(el,id) {
    const wish = document.getElementById(`wish-${id}`)
    wish.classList.toggle('expanded')
    if (el.classList.contains('triangle-down')){
        el.classList.remove('triangle-down')
        el.classList.add('triangle-up')
    }
    else if (el.classList.contains('triangle-up')){
        el.classList.remove('triangle-up')
        el.classList.add('triangle-down')
    }
 }