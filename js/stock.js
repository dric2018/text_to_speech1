//shadow
$('.card').hover(function shawow_in(){
  $(this).addClass("z-depth-5")
  },
function shawow_out(){
  $(this).removeClass("z-depth-5")
}
)


function autre(){
    swal({
      title: 'Désolé',
      text: 'Contenu indisponible',
      type: 'error',
      showCancelButton: false,
      confirmButtonColor: '#DD6B55',
      closeOnConfirm: true,
  })
}

