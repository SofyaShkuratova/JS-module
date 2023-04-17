const arr = {
    "cls-1":[{title:'Замостье', photo:'./img/1.JPG', inf:'Замостье самый первыый и прекрасный район Орши'}],
    "cls-2":[{title:'Западная', photo:'./img/3.JPG', inf:'Западная самый интересный район'}],
    "cls-3":[{title:'Микрорайон №1', photo:'./img/4.JPG', inf:'Микрорайон №1 самый спокойный спальный район'}],
    "cls-4":[{title:'Микрорайон №2', photo:'./img/5.JPG', inf:'Микрорайон №2 самый удивительный район Орши'}],
    "cls-5":[{title:'Раница', photo:'./img/2.JPG', inf:'Раница район для удобства'}]
}
let activeEl = '';

document.querySelectorAll('.reg').forEach((el)=>{
    el.addEventListener('click', (e)=>{
        let target = e.target;
        document.querySelector('.inf__container').innerHTML = '';
        arr[target.classList[0]].forEach((el)=>{
            document.querySelector('.inf__container').innerHTML += `<div class="inf-el">
                                                                <h4 class="inf-title">${el.title}</h4>
                                                                <div class="inf-body">${el.inf}</div>
                                                                <img src="${el.photo}" width="250px">
                                                            </div>`;
        })
    })
})

function moveRectangle(e) {
    let [startLeft, startTop] = [e.getBoundingClientRect().left, e.getBoundingClientRect().top];
    activeEl = document.elementFromPoint(startLeft, startTop)?.classList[0];
    document.elementFromPoint(startLeft, startTop).classList.toggle('reg--active');
    arr[activeEl].forEach((el)=>{
        document.querySelector('.inf__container').innerHTML += `<div class="inf-el">
                                                            <h4 class="inf-title">${el.title}</h4>
                                                            <div class="inf-body">${el.inf}</div>
                                                            <img src="${el.photo}" width="250px">
                                                        </div>`;
    })
    let interval = setInterval(()=> { 
        let {left, top} = e.getBoundingClientRect();

        if (document.elementFromPoint(left, top)?.classList[0] && document.elementFromPoint(left, top)?.classList[0] != activeEl) {
            activeEl = document.elementFromPoint(left, top)?.classList[0];
            document.querySelector('.reg--active').classList.toggle('reg--active');
            document.elementFromPoint(left, top).classList.toggle('reg--active');
            document.querySelector('.inf__container').innerHTML = '';
            arr[activeEl].forEach((el)=>{
                document.querySelector('.inf__container').innerHTML += `<div class="inf-el">
                                                                    <h4 class="inf-title">${el.title}</h4>
                                                                    <div class="inf-body">${el.inf}</div>
                                                                    <img src="${el.photo}" width="250px">
                                                                </div>`;
            })
        }

        if (left == startLeft && top == startTop) clearInterval(interval);
    }, 100)
}