// Google Event Tracking

var anal = document.querySelectorAll('.anal');
anal.forEach( function( btn ) {
   btn.addEventListener('click', function(event) {
      ga('send', 'event', {
         eventAction: 'click',
         eventCategory: 'Checking links',
         eventLabel: event.target.attributes.title.value // buy-now-above || buy-now-below
      });
   });
} );
