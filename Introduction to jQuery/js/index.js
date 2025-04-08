
$('#signout').on("click", function(){
    console.log($(this));
    alert("You are about to logout of our page. See you next time!");
});

/*
$("li").on("click", function(){
    console.log($(this).text());
});
*/

$('.close').on("click", function(){
    $(this).closest('.card-list-item').remove();
    let numOfRequest = $('#connectionRequestNumber').text();
    numOfRequest --;
    $('#connectionRequestNumber').text(numOfRequest);

    if(numOfRequest === 0){
        alert("No more connection requests!");
    }
});

$('#search').on("keyup", function(){
    console.log($(this).val());
});

$('#trigger-search').on("click", function(){
    let newName = $('#search').val();
    $('.card-list').prepend(`
            <li class="card-list-item">
                <span>
                    <img src="images/todd-s.jpg" alt="todd" class="avatar-s">
                    ${newName}
                </span>
                <span class="buttons">
                    <img src="icons/accept-circle.png" alt="accept" class="icon">
                    <img src="icons/close-circle.png" alt="close" class="icon close">
                </span>
            </li>
        `);

});


$('.card-header').on("mouseenter", function(){
    $(this).addClass('extra');
});

$('.card-header').on("mouseout", function(){
    $(this).removeClass('extra');
});