// console.log('test')




// Set Header Height Offset
var prevHght = 0;
headerHeight()
document.addEventListener( 'DOMContentLoaded', headerHeight );
window.addEventListener( 'resize', headerHeight );
window.addEventListener( 'scroll', headerHeight );
function headerHeight() {
  var hdrEl = document.querySelectorAll('header.site-header');
  if ( prevHght != hdrHght && hdrEl.length > 0 ) {
    var hdrHght = hdrEl[0].clientHeight;
    document.documentElement.style.setProperty('--header-height', hdrHght + 'px');
  }
  // console.log(hdrEl)
  // console.log(hdrHght)
}
