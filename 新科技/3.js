	window.onload = function(){
  var oTop = document.getElementById("to_top");
  document.onmousemove = function(evt){
    var oEvent = evt || window.event;
    var scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    oTop.style.left = oEvent.clientX + scrollleft +(10)+"px";
    oTop.style.top = oEvent.clientY + scrolltop + (10)+ "px";
  }
}
	var sy4=document.getElementById("sy4");
			var sy5=document.getElementById("sy5");
			var sy6=document.getElementById("sy6");
			var sy7=document.getElementById("sy7");
			var t=0;
			function xiao(){
				t++;
				if (t==7) {
					sy5.style.display="none";
					sy4.style.display="block";
					sy6.style.display="block";
					sy7.style.display="block";
					
				} 
				if(t==28){
					location.href ="jiemian.html";
				}
				
			}
			xiao();
			setInterval(xiao,1000);