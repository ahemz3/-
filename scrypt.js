// Будь ласка, не змінюй код нижче. Він необхідний для правильного налаштування позиціонування елементів :)
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)

// Код, який потрібно виправити
let item_name_objects = document.querySelectorAll('.merch-item-name')
let item_names = ['Гонки', 'Хорори', 'Платформери', 'Інді-ігри']
for (let i = 0; i < item_names.length; i += 1) {
    item_name_objects[i].innerHTML = item_names[i]
}

let item_descriptione_objects = document.querySelectorAll('.merch-item-descr')
let item_descriptione = [
    'змагання на транспортних засобах, від автомобілів до космічних кораблів.',
    'ігри, що викликають страх і напругу, часто з елементами виживання.',
    'стрибки та подолання перешкод у 2D або 3D світі.',
    'невеликі проєкти від незалежних розробників, можуть поєднувати кілька жанрів.'
]
for (let i = 0; i < item_descriptione.length; i += 1) {
    item_descriptione_objects[i].innerHTML = item_descriptione[i]
}

let item_price_objects = document.querySelectorAll('.merch-item-price')
let item_price = ['Деталі', 'Деталі', 'Деталі', 'Деталі']
for (let i = 0; i < item_price.length; i += 1) {
    item_price_objects[i].innerHTML = item_price[i]
}






let cart_btns = document.querySelectorAll('.add-to-cart-btn')
let cart = document.querySelector('.cart-amount')
for (let i = 0; i < cart_btns.length; i += 1) {
    cart_btns[i].addEventListener('click', function() {
        cart.innerHTML = +cart.innerHTML + 1
    })
}












// Код, який змінює тему
function change_theme() {
   let header = document.querySelector('header')
   if (current_background == 'url()') {
       current_background = 'url(/uploads/2022/11/bg_mars.png)'
   } else {
       current_background = 'url(/uploads/2022/11/bg_space.png)'
   }
   header.style.background = current_background
   header.style.backgroundSize = 'cover'
}
 
let change_theme_button = document.querySelector('.switch-theme-button')
let current_background = 'url(/uploads/2022/11/bg_mars.png)'
change_theme_button.addEventListener('click', change_theme)
 

// Підрахунок вартості квитка
function calc_price() {
   let days_input = document.querySelector('.days-input')
   let days_amount = days_input.value
   if (days_amount == '') {
       days_input.style.border = '1px solid #AD4851'
   } else {
       let one_day_price = +document.querySelector('.submit-select').value
       let total = +days_amount * one_day_price
       days_input.style.border = 'none'
       days_input.style.borderBottom = '1px solid #5D4229'
       alert(total)
   }
}
let calc_button = document.querySelector('.submit-btn-calc')
calc_button.addEventListener('click', calc_price)


// Красива кнопка 'Відправити'
function make_transparent() {
    send_btn.style.backgroundColor = 'transparent'
}
 
function make_colorful() {
    send_btn.style.backgroundColor = '#C2AB99'
}

let send_btn = document.querySelector('.submit-btn-send')

send_btn.addEventListener('mouseenter', make_transparent)
send_btn.addEventListener('mouseleave', make_colorful)