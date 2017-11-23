$('#numero0').click(function () {
    $('#display').html($('#display').text() + "0");
});
$('#numero1').click(function () {
    $('#display').html($('#display').text() + "1");
});
$('#numero2').click(function () {
    $('#display').html($('#display').text() + "2");
});
$('#numero3').click(function () {
    $('#display').html($('#display').text() + "3");
});
$('#numero4').click(function () {
    $('#display').html($('#display').text() + "4");
});
$('#numero5').click(function () {
    $('#display').html($('#display').text() + "5");
});
$('#numero6').click(function () {
    $('#display').html($('#display').text() + "6");
});
$('#numero7').click(function () {
    $('#display').html($('#display').text() + "7");
});
$('#numero8').click(function () {
    $('#display').html($('#display').text() + "8");
});
$('#numero9').click(function () {
    $('#display').html($('#display').text() + "9");
});
$('#sinalMais').click(function () {
    $('#display').html($('#display').text() + " + ");
});
$('#sinalMenos').click(function () {
    $('#display').html($('#display').text() + " - ");
});
$('#sinalVezes').click(function () {
    $('#display').html($('#display').text() + " * ");
});
$('#sinalDividir').click(function () {
    $('#display').html($('#display').text() + " / ");
});
$('#igual').click(function () {
    $('#display').html(eval($('#display').text()));
});
$('#limpar').click(function () {
    $('#display').html("");
});