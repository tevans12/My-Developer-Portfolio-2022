$(document).ready(function(){
	//alert("es working 1");

	//SCROLL The Anchor, Used to determine scroll location
	var a;

	$(".skip").click(function(){
		//SCROLL Find the id of the current element to determine a
		if(this.id == "about_button"){
			a="#about";
		}
		if(this.id == "projects_button"){
			a="#projects";
		}
		else if(this.id == "contact_button"){
			a="#contact";
		}

		//SCROLL Smooth Scroll Effect
		$("html, body").animate({scrollTop: $(a).offset().top - 55}, 1000);
	});

	$(".project_desc_container a:contains(Read More)").each(function(){
		var text = $(this).closest('.project_desc_container').find('h2').text();
		// console.log(text);
		$(this).attr('aria-label','Read More about '+text);
	});

});//End Document Ready