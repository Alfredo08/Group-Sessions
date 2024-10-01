
let form = document.querySelector('#dogImagesForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const numOfImages = document.querySelector('#numOfImages').value;

    const URL = `https://dog.ceo/api/breeds/image/random/${numOfImages}`;
    const settings = {
        method: 'GET'
    }

    fetch(URL, settings)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            const results = document.querySelector('.results');
            results.innerHTML = "";
            for(let i = 0; i < data.message.length; i ++){
                results.innerHTML += `<img class="dogImage" src="${data.message[i]}" alt="Image of a dog" />`;
            }
        });

});