$().ready(function () {

    var menuarr = ['#first', '#second'];
/*    $("#side_down").click(function(event){
        event.preventDefault();
        page_no++;
        if(page_no == menuarr.length){
            page_no = menuarr.length - 1;
        }else{
            animateTo(menuarr[page_no])
        }
      }) */


      //var intElemScrollTop = someElement.scrollTop;

      $('#side_down').bind("click", function () {
        $('html,body').animate({ scrollTop:$("#second").offset().top - 100 },"slow");
    
});

   
});