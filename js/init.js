(function($){
  $(function(){

    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
    $('.parallax').parallax();

    var options = [
    {selector: '#box-1', offset: 100, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#box-2', offset: 140, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#box-3', offset: 100, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#box-4', offset: 140, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#personal-list', offset: 150, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
    {selector: '#img-list', offset: 200, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
    {selector: '#stagger-list-1', offset: 150, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
    {selector: '#stagger-list-2', offset: 150, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
    {selector: '#stagger-list-3', offset: 150, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
    {selector: '#card-1', offset: 60, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#card-2', offset: 100, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#card-3', offset: 140, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#card-4', offset: 60, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#card-5', offset: 100, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#card-6', offset: 140, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
  ];
  Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space