// scroll sticky
            
$(document).on('scroll',function() {

    if($(this).scrollTop() > 1) {

        $('.nav-prof').addClass('sticky');
    } else{

        $('.nav-prof').removeClass('sticky');
    }
})

//navbar profile 
            
$(document).ready(function() {

    $('.nav-prof .nav .profile').click(function() {

        $('.nav-prof .nav .bgclose .drpdown').toggleClass('active');
        
        $('.nav-prof .nav .bgclose').toggleClass('active');
    })
    
    $('.nav-prof .nav .bgclose').click(function() {

        $('.nav-prof .nav .bgclose .drpdown').removeClass('active');
        
        $('.nav-prof .nav .bgclose').removeClass('active');
    })
})

//navbar burger
            
$(document).ready(function() {

    $('.main-nav .bg-rspv .burger').click(function() {
        
        $('.main-nav .bg-rspv').toggleClass('active');

        $('.main-nav .bg-rspv .burger').toggleClass('active');
        
        $('.main-nav .sidebar').toggleClass('active');
        
        $('.main-nav .bg-rspv .burger .strip').toggleClass('active');
    })
})