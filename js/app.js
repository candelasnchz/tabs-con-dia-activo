$(function(){
  $('ul.tabs li').on('click',function(){
    $('ul.tabs li').removeClass('active');
    $(this).addClass('active')
    $('.block article').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).show();
    return false;
  });
});

var today =  new Date();
    var todayIdx = today.getDay();
    console.log('today:', todayIdx);
    var ahora = today.getHours();
    var ahoraMin = today.getMinutes();
 

    if (todayIdx === 0) {
        $('li:nth-child(6)').removeClass('active');
        $('li:nth-child(7)').addClass('active');
        $('.block article').hide();
        $('.block  #do1').show();

         
    }

    else if (todayIdx === 1) {
        $('li:nth-child(7)').removeClass('active');
        $('li:nth-child(1)').addClass('active');
        $('.block article').hide();
        $('.block  #lu1').show();
    }
    else if (todayIdx === 2) {
        $('li:nth-child(1)').removeClass('active');
        $('li:nth-child(2)').addClass('active');
        $('.block article').hide();
        $('.block  #ma1').show();
    }
    else if (todayIdx === 3) {
        $('li:nth-child(2)').removeClass('active');
        $('li:nth-child(3)').addClass('active');
        $('.block article').hide();
        $('.block  #mi1').show();
        
    }
    else if (todayIdx === 4) {
        $('li:nth-child(3)').removeClass('active');
        $('li:nth-child(4)').addClass('active');
        $('.block article').hide();
        $('.block  #ju1').show();
        
    }
    else if (todayIdx === 5) {
        $('li:nth-child(4)').removeClass('active');
        $('li:nth-child(5)').addClass('active');
        $('.block article').hide();
        $('.block  #vi1').show();
        
    }
    else  {
        $('li:nth-child(5)').removeClass('active');
        $('li:nth-child(6)').addClass('active');
        $('.block article').hide();
        $('.block  #sa1').show();
       
    }
    



