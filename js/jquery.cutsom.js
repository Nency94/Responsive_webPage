// open model
$(document).on('click', '#addNew', function () {
    $('#modal').removeClass('display-none').slideDown().addClass('display-block').addClass('modal-position');
    $('#Title').val('');
    for (i = 1; i <= 6; i++) {
        $('#label' + i).val('');
    }

});

$(document).on('click', '#close', function () {
    $('#modal').removeClass('display-block').removeClass('modal-position').slideUp().addClass('display-none');
});

$(document).on('click', '#formSubmit', function () {
    $('#modal').removeClass('display-block').removeClass('modal-position').slideUp().addClass('display-none');
    var bla = $('#Title').val();
    if (bla) {
        var card = ' <div class="card"><div class="heading-card"><h2>' + $('#Title').val() + '</h2><button id="deleteCard">X</button></div><ul class="tags">'
        for (i = 1; i <= 6; i++) {
            if (card) {
                card = card + '<li>' + $('#label' + i).val() + '</li>';
            }
        }
        card = card + '</ul></div>';
        console.log('card', card);
        $('#cardList').append(card);
    }
});

$(document).on('click', '#deleteCard', function (e) {
    $(e.target).closest('.card').remove();
});

$(document).on('click', '#expandAll', function () {
    $('.card').children('ul').removeClass('display-none');
});

$(document).on('click', '.heading-card>h2', function (e) {
    $(e.target).closest('.card').children('ul.tags').toggleClass('display-none');
})