$(document).ready(function() {
    $('.nav-bar').css({
      'display': 'flex',
      'justify-content': 'space-between',
      'align-items': 'center',
      'padding': '10px'
    });
  
    $('.nav-bar h1').css({
      'color': '#da491c'
    });
  
    $('.nav-bar ul').css({
      'list-style': 'none',
      'display': 'flex',
      'margin': '0',
      'padding': '0'
    });
  
    $('.nav-bar li').css({
      'margin': '0 10px'
    });
    $('header').css({
        'background-color': '#5b5b5b',
      });
  
    $('.nav-bar a').css({
      'text-decoration': 'none',
      'color': 'white',
      'font-weight': 'bold'
    });
  });
  $(document).ready(function() {
    $(".big-titre").css("font-size", "3em");
    $(".big-titre").html(function(_, html) {
      return html.replace(/(love)/g, '<span style="color: #da491c;">$1</span>');
    });
  });
  $(document).ready(function() {
    $('.big-titre').css({
      'text-align': 'center',
      'color': 'white'
    });
    $('.txt0').css({
      'text-align': 'center',
      'color': 'white',
      'font-size' : '20px'
    });
  });
  $('.info').css({
    'background-color': '#f0eeee'
  });

  $(document).ready(function() {
    $('.info').css({
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'space-between'
    });
  
    $('.info-part, .info-part2, .info-part3, .info-part4, .info-part5, .info-part6').css({
      'width': '30%'
    });
  });

  $('.titre0').css({
    'color': '#3d3d3d',
    'font-weight' : 'bold',
    'font-size' : '20px'
  });
  $('.end').css({
    'background-color': '#f0eeee',
    'text-align': 'center',
  });
  $('.end-txt').css({
    'color': '#da491c',
    'text-align': 'center',
  });
//   EFFETS
  $(document).ready(function() {
    $('.effect-img img').hover(function() {
      $(this).css('opacity', '0.7').css('cursor', 'zoom-in');
    }, function() {
      $(this).css('opacity', '1').css('cursor', 'default');
    });
  });

  $(document).ready(function() {
    $('.effect-img img').hover(function() {
      $(this).animate({ width: "15%", height: "10%" });
    }, function() {
      $(this).animate({ width: "15%", height: "10%" });
    });
  });

  $(document).ready(function() {
    $('.effect-img').css('text-align', 'center');
  });