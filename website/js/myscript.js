// JavaScript Document
$(document).ready(function(e) {
    
	$("#fb").mouseenter(function(e) {
        
		$("#bg-of-fb").animate({left:"-10px"},500);
		
		
    });
	
	$("#fb").mouseleave(function(e) {
        
		$("#bg-of-fb").animate({left:"-150%"},500);
		
		
    });
	$("#twi").mouseenter(function(e) {
        
		$("#bg-of-twi").animate({left:"-10px"},500);
		
		
    });
	
	$("#twi").mouseleave(function(e) {
        
		$("#bg-of-twi").animate({left:"-150%"},500);
		
		
    });
	$("#insta").mouseenter(function(e) {
        
		$("#bg-of-insta").animate({left:"-10px"},500);
		
		
    });
	
	$("#insta").mouseleave(function(e) {
        
		$("#bg-of-insta").animate({left:"-150%"},500);
		
		
    });
	$("#btn").click(function(e) {
       
		$("#innav2").slideToggle(200);
		
		
    });
	
});