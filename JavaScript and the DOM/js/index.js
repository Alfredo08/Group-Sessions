
const removeConnection = (event) => {
    event.target.closest('.card-list-item').remove();
}

let closeButtons = document.querySelectorAll('.close');
console.log(closeButtons);

for(let i = 0; i < closeButtons.length; i ++){
    closeButtons[i].addEventListener('click', removeConnection);
}


const cardHeader = document.querySelector("#main-card-header");
cardHeader.addEventListener('mouseenter', (event) => {
    event.target.classList.add('extra');
});
cardHeader.addEventListener('mouseout', (event) => {
    event.target.classList.remove('extra');
});

const triggerSearch = document.querySelector('#trigger-search');
triggerSearch.addEventListener('click', (event) => {
    let searchContent = document.querySelector('#search').value;
    alert("You are searching for " + searchContent);
});