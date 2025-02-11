
const dogForm = document.querySelector('.dogForm');

dogForm.addEventListener('submit', async function (event){
    event.preventDefault();
    
    const numOfDogs = document.querySelector('#numerOfImages').value;
    const URL = "https://dog.ceo/api/breeds/image/random/" + numOfDogs;
    
    try{
      const response = await fetch(URL);  
      const data = await response.json();
      const results = document.querySelector('.results');
            results.innerHTML = "";
            for(let i = 0; i < data.message.length; i ++){
                results.innerHTML += `
                    <img src="${data.message[i]}" alt="Dog image" >
                `;
            }
    }
    catch(error){
        console.log("Something went wrong", error);
    }

    /*
    fetch(URL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            const results = document.querySelector('.results');
            results.innerHTML = "";
            for(let i = 0; i < data.message.length; i ++){
                results.innerHTML += `
                    <img src="${data.message[i]}" alt="Dog image" >
                `;
            }
        })
        .catch(function(error){
            console.log("Something went wrong", error);
        });
    */
});