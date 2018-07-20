$('.btn').on( 'click', function () {

    $('body').css('background-color','yellow');
    $('.smiley').animate({opacity : 1});
    $('.choix').animate({opacity : 1});
    $('.btn-primary').remove();

});

$('.btn-gauche').on( 'click', function () {
    $(this).remove();
    $('.btn-droit').remove();
    $('.choix').text("Je t'offre une piscine privé pour ton anniv ;)");

});

$('.btn-droit').on( 'click', function () {
    $(this).remove();
    $('.btn-gauche').remove();
    $('.choix').text("Je t'offre un biscuit pour ton anniv ;)");

});