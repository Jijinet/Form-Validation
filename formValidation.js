
  const $inputs=('input[type=text]');
  const $checkboxs=('input[type=checkbox]');
  const $selects=('select');
  const months=['January','February','March','April','June','July','August','Spemtember','November','December'];
  const years =[2021,2022,2023,2024,2025,2026];

  
  // fill YEARS & MONTHS

  $(years).each(function(i,yr){
    $('.year').append(`<option value=${i}>${yr}</option>`);
  })
     

  $(months).each(function(i,mn){
  $('.month').append(`<option value=${i}>${mn}</option>`)
})


// hide JOB ROLE INPUT



  $('.job-role').on('change',function(e){

    if(!$(this).val()){
      $(this).prev().show()
    }
    
   else if($(this).val()=='other'){
     $('.job-input').show()
   }
   else{
    $('.job-input').hide()
   
   }
  })


  // DESIGN COLOR 

  $('.design').on('change',function(e){
     
    if($('.color').val('')){
      $('.color').prev().show()
    }
   if($(this).val() ==''){
     $('.color-div').hide()
     $(this).prev().show()
   }
  
   else{
    if($(this).val() =='js-puns'){
     
      $('.color option[value="js"]').attr('disabled','disabled')
     }
     else{
      
      $('.color option[value="js"]').removeAttr('disabled')
     }
      if($(this).val() =='js'){
       
        $('.color option[value="js-puns"]').attr('disabled','disabled')
     }
     else{
      
      $('.color option[value="js-puns"]').removeAttr('disabled')
     }
    $('.color-div').show()
   
   }
   
   })



  //  ELEMENT CHECKED
  let price=0
   
  $('input[type="checkbox"]').on('change',function(e){
    
  if(!$($checkboxs).is(':checked')){
    $('.activities-title').next().show()
}
    if($(this).is(':checked')){
      price+=Number($(this).val())
    }
  
    else{
      price-=Number($(this).val())
      
    }
    $('.price').text('Total cost: $'+price)
   

    if($('.th-1').is(':checked')){
     
      $('.th-3').attr('disabled','disabeld').parent().addClass('line')
  }
  else if($('.th-3').is(':checked')){
  
    $('.th-1').attr('disabled','disabeld').parent().addClass('line')
  }
  else{
    $('.th-1 ,.th-3').removeAttr('disabled').parent().removeClass('line')
  }

  if($('.th-2').is(':checked')){
     
    $('.th-4').attr('disabled','disabeld').parent().addClass('line')
}
else if($('.th-4').is(':checked')){
     
  $('.th-2').attr('disabled','disabeld').parent().addClass('line')
}
else{
  $('.th-4,.th-2').removeAttr('disabled').parent().removeClass('line')
}


  })

  // PAYMENT METHODS

  $('.payement-method').on('change',function(e){
    

      if($(this).val()=='credit'){
        $('.credit-card-infos').show();
        $('.payment-msg').hide()
      }
      else if($(this).val()=='paypal'){
        $('.credit-card-infos').hide();
        $('.payment-msg').show()
        $('.payment-msg').text(`If you selected the PayPaloption we'll take tou to PayPal's site to set up your billing information, when you click "Register" bleow.`)
      }
      else if($(this).val()=='bitcoin'){
        $('.credit-card-infos').hide();
        $('.payment-msg').show()
        $('.payment-msg').text(`If you selected the Bitcoin option we'll takeyou to the Coinbase site to set up your billing information.Due to the nature of exchanging Bitcoin,all Bitcoin transactions will be finally.`)
      }
      else{
        $('.credit-card-infos').hide();
        $('.payment-msg').hide()
        $(this).prev().show()
      }

  })


$('.month,.year').on('change',function(e){

    if(!$(this).val()){
      $(this).prev().show()
    }

})


$('.register').on('click',function(e){

  
  $($inputs).each(function() {
        if(!$(this).val()){
          
            $(this).prev().show()
        }
        else{
          $(this).prev().hide()
        } 

  });


  $($selects).each(function() {

  if(!$(this).val()){
      $(this).prev().show()
    
  }

  else{
    $(this).prev().hide()
  }

  });


  if(!$($checkboxs).is(':checked')){
      $('.activities-title').next().show()
    
  }
  else{
    $('.activities-title').next().hide()
  }


})
