let currentPhoto = 0;
let photos = [];

$("#photo-list .photo").each(function() {  
   photos.push(this.src);
});  

/*$("#photo-list .photo").click(function(){
	$("#iv-container").css('display', 'block');
	$("#iv-image").css("background-image", "url(" + this.src+ ")");
	currentPhoto = $("#photo-list .photo").index(this);
	$("#iv-photo-num").text((currentPhoto+1)+"/"+photos.length);
});*/

$(".view").click(function(){	
	let photo= this.offsetParent.children[0];
	currentPhoto = $("#photo-list .photo").index(photo);
	$("#iv-photo-num").text((currentPhoto+1)+"/"+photos.length);
	$("#iv-container").css('display', 'block');
	$("#iv-image").css("background-image", "url(" + photo.src+ ")");
});


$(".close").click(function(){
	$("#iv-container").css('display', 'none');
});

$("#iv-next").click(function(){
	currentPhoto++;
	if(currentPhoto >= photos.length){
		currentPhoto = 0;
	}
	$("#iv-image").css("background-image", "url(" + photos[currentPhoto]+ ")");
	$("#iv-photo-num").text((currentPhoto+1)+"/"+photos.length);
});

$("#iv-prev").click(function(){
	currentPhoto--;
	if(currentPhoto < 0){
		currentPhoto = photos.length-1;
	}
	$("#iv-image").css("background-image", "url(" + photos[currentPhoto]+ ")");
	$("#iv-photo-num").text((currentPhoto+1)+"/"+photos.length);
});