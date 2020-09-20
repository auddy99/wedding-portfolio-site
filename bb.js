$(".imgShowcase img").click(function(){
	$(".imgShowcase img").removeClass("imgBlock")
	$(this).addClass("imgBlock")
})

$(".teamMember").mouseenter(function(){
	$(this).children("img").css("opacity","0.5")
	$(this).children("div").fadeIn()
}).mouseleave(function(){
	$(this).children("img").css("opacity","1")
	$(this).children("div").fadeOut(0)
})


function counterStart(){
	var id3 = setInterval(function(){
		$(".counter1").text(parseInt($(".counter1").text())+1)
		$(".counter2").text(parseInt(parseInt($(".counter1").text())*0.22))
		$(".counter3").text(parseInt(parseInt($(".counter1").text())*0.08))
		$(".counter4").text(parseInt(parseInt($(".counter1").text())*0.03))
		if(parseInt($(".counter1").text())==210){
			clearInterval(id3)
		}
	},1000);

	var id2 = setInterval(function(){
		$(".counter1").text(parseInt($(".counter1").text())+1)
		$(".counter2").text(parseInt(parseInt($(".counter1").text())*0.22))
		$(".counter3").text(parseInt(parseInt($(".counter1").text())*0.08))
		$(".counter4").text(parseInt(parseInt($(".counter1").text())*0.03))
		if(parseInt($(".counter1").text())==200){
			clearInterval(id2)
		}
	},100);


	var id = setInterval(function(){
		$(".counter1").text(parseInt($(".counter1").text())+1)
		$(".counter2").text(parseInt(parseInt($(".counter1").text())*0.22))
		$(".counter3").text(parseInt(parseInt($(".counter1").text())*0.08))
		$(".counter4").text(parseInt(parseInt($(".counter1").text())*0.03))
		if(parseInt($(".counter1").text())==190){
			clearInterval(id)
		}
	},10);
}



// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
var flag=false;

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
//   console.log(winScroll,"@",height)
  if(winScroll>1800&&winScroll<2500&&flag==false){
  	counterStart();
  	flag=true;
  }
  document.getElementById("myBar").style.width = scrolled + "%";
}

var windowsize = $(window).width();
console.log(windowsize);
if(windowsize < 1100){
	$(".overText").css("display","none");
	$(".display-1").css("font-size","400%");
	$(".display-1").css("font-size","400%");
	$(".teamMember").css("width","6.52rem");
	$(".teamInfo").css("font-size","0.5em");
	$(".teamInfo h1").css("font-size","2em");
	$(".teamC").css("width","90%");
	$(".teamMember img").css("height","8rem");
	$(".showcase img").css("width","32%");
}

for (var i = 1; i < 10; i++) {
	console.log(".s"+i)
	$(".sT"+i).mouseenter(function(){
		console.log(".s"+i)
		$(".s1").addClass("disp")
	}).mouseleave(function(){
		$(".s1").removeClass("disp")
	})
}
