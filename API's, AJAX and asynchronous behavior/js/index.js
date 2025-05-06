
let dogInfoForm = document.querySelector('.dogInfo');

dogInfoForm.addEventListener('submit', function(event){
    event.preventDefault();

    let numberOfDogs = document.querySelector('#numberOfDogs').value;
    let URL = "https://dog.ceo/api/breeds/image/random/" + numberOfDogs;
    
    let settings = {
        method: "GET",
    }

    fetch(URL, settings)
        .then(function(response){
            if(response.ok){
                return response.json();
            }
            throw new Error("Something went wrong " + response.statusText);
        })
        .then(function(data){
            let results = document.querySelector('.results');
            results.innerHTML = ""; // Clearing the container of results

            for(let i = 0; i < data.message.length; i ++){
                results.innerHTML += `<img class="dogImage" src="${data.message[i]}" alt="Dog image" >`;
            }
        })
        .catch(function(error){
            console.log(error);
        });
});