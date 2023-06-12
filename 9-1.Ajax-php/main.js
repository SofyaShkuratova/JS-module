const servResponse = document.querySelector('#response')

document.forms.ourForm.onsubmit = function (e){
    e.preventDefault();

    let userInput = document.forms.ourForm.ourForm_inp.value;
    userInput = encodeURIComponent(userInput);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'form.php');

    xhr.setRequestHeader('Content-type', application/x-www-form-urlencoded);

    xhr.send('ourForm_inp=', userInput)
};