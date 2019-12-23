$(document).ready(initializeApp)

// Get the button that opens the modal
var btn = document.getElementById("sign-up-button");

// Get the <span> element that closes the modal
var span = $("#sign-up-modal-close")[0];
var coll = document.getElementsByClassName("collapsible");


function initializeApp() {
    console.log('initializeApp ran...');
    console.log('window', window);

    $('#sign-up-bar-header').click(function() {
      console.log('collapsible ran...')
      var content = $('#collapsible');
      if($('#collapsible').hasClass('display-none')) {
        $('#collapsible').removeClass('display-none');
      } else {
        $('#collapsible').addClass('display-none');
      }
      // if($('#collapsible').hasClass('display-block')) {
      //   $('#collapsible').addClass('display-none').removeClass('display-block');
      // } else {
      //   $('#collapsible').addClass('display-block').removeClass('display-none');
      // }
    });

}



// When the user clicks on the button, open the modal
openModal = () => {
//   modal.style.display = "block";
  $('#page-sign-up-modal').addClass('display-block').removeClass('no-display');
}

// When the user clicks on <span> (x), close the modal
closeModal = () => {
    $('#page-sign-up-modal').addClass('no-display').removeClass('display-block');
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     console.log('window clicked');
//     console.log(event);
//     console.log(event.target);
//   if (event.target == $('#page-sign-up-modal')) {
//     $('#page-sign-up-modal').addClass('no-display').removeClass('display-block');
//   }
// }





// $('body').click(function (event) 
// {
//    if(!$(event.target).closest('#page-sign-up-modal').length && !$(event.target).is('#page-sign-up-modal')) {
//     $('#page-sign-up-modal').addClass('no-display').removeClass('display-block');
//    }     
// });
