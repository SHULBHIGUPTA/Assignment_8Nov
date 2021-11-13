//Wall I paint

var wallpaint = (n,w,h) => {
    Area = w * h;
   if(n >= Area)
   {
       var t = parseInt(n/Area);
   return ("The number of complete walls that I can paint is " +t)
   } 
   else
   {
    return ("You need to head to the shops to buy more blue paint")  
   }  
}
var n = 40;
document.getElementById("WallIpaint").innerHTML = wallpaint(n,3,6);




