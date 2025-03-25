let closeButtons = document.querySelectorAll('.close');

for(let i = 0; i < closeButtons.length; i ++){
    closeButtons[i].addEventListener("click", function(event){
        event.target.closest('.card-list-item').remove();
        let connectionRequestNumber = Number(document.querySelector('#connectionRequestNumber').textContent);
        document.querySelector('#connectionRequestNumber').textContent = connectionRequestNumber - 1;
        if(connectionRequestNumber - 1 === 0){
            alert("No more conexion requests!");
        }
    });
}

let cardHeaders = document.querySelectorAll('.card-header');

for(let i = 0; i < cardHeaders.length; i ++){
    cardHeaders[i].addEventListener("mouseover", function(event){
        event.target.classList.add('extra');
    });
    cardHeaders[i].addEventListener("mouseout", function(event){
        event.target.classList.remove('extra');
    });
}

let searchButton = document.querySelector('#trigger-search');

searchButton.addEventListener("click", function(event){
    let searchValue = document.querySelector('#search').value;
    alert(searchValue);
});