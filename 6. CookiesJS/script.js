import Cookie from "./js.cookie.mjs";

document.querySelector('.but1').addEventListener('click', ()=>{
    Cookie.default = {
        path:'/',
        expires:1
    };
    Cookie.set('login', prompt('Введите логин'));
    Cookie.set('password', prompt('Введите пароль'));
    Cookie.set('secret', prompt('Введите секретное слово'));
});
document.querySelector('.but2').addEventListener('click', ()=>{
    if (prompt('Введите секретное слово') === Cookie.get('secret')) {
        alert(`${Cookie.get('login')} : ${Cookie.get('password')}`);
    }
})
document.querySelector('.but3').addEventListener('click', ()=>{
    Cookie.remove('login');
    Cookie.remove('password');
    Cookie.remove('secret');
})
