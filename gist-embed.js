//author: Blair Vanderhoof
//https://github.com/blairvanderhoof/gist-embed
$(function(){
	//find all elements with gistEmbed class
	$(".gist-embed").each(function(){
		var $elem, id;
		$elem = $(this);
		id = $elem.attr("id");
		id = id || "";
		//get the numeric id from the id attribute of the element holder
		id = id.replace("gist-","");

		//make sure result is a numeric id
		if(!isNaN(parseInt(id,10))){
			//request the json version of this gist
			$.ajax({ 
				url: "https://gist.github.com/"+id+".json", 
				dataType: "jsonp", 
				success: function(response){
					//the html payload is in the div property
					if(response && response.div){
						//add the html to your element holder
						$elem.html(response.div);
					}
				}
			});	
		}	
	});
});