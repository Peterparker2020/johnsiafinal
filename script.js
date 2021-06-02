 $("#button").click(function(){  
	$.ajax({
	  url: "https://api.forismatic.com/api/1.0/",
	  dataType: "jsonp",
	  jsonp: "jsonp",
		data: {
		  method: "getQuote",
		  format: "jsonp",
		  lang: "en"
		},
		success: function(data) {
		  
		  let author = "Quote by: " + data.quoteAuthor;
		  let text = data.quoteText;
		  $("#text").html(text);
		  $("#author").html(author);
		  $("#twitter").css("display","inline");
		  $('#tweet').attr('href', "https://twitter.com/intent/tweet?text=" + data.quoteText + "%20-:%20" + data.quoteAuthor);
		}
	});
	});

	
	  