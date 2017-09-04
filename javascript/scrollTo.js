$(document).ready(function() {
    
   
$("#brasovgtab").click(function(){
scrolldown("#brasov"); })

$("#albagtab").click(function(){
scrolldown("#alba"); })

$("#hunedoaragtab").click(function(){
scrolldown("#hunedoara");})

$("#iasigtab").click(function(){
scrolldown("#iasi"); })

$("#prahovagtab").click(function(){
scrolldown("#prahova");} )

$("#satumaregtab").click(function(){
scrolldown("#satumare");}) 
    
 
    
    
    
    
function scrolldown(targetdiv){
$('html, body').animate({
scrollTop: $(targetdiv).offset().top
}, 1000); 
} 
  
  
  
});