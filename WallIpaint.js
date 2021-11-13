//Wall I paint

var wallpaint = (n,w,h) => {
    Area = w * h;
   if(Area%n == 0)
   {
       var t = Area/n;
   return ("The number of complete walls that I can paint is " +t)
   } 
   else
   {
    return ("You need to head to the shops to buy more blue paint")  
   }  
}
var n = 50;
document.getElementById("WallIpaint").innerHTML = wallpaint(n,6,6);




