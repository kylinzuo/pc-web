$(document).ready(function() {
  $('.weixin').mouseover(function() {
    $('.QR-code').show()
  })
  $('.weixin').mouseout(function() {
    $('.QR-code').hide()
  })
})