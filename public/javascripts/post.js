/*
$('button#postbtn').click(function(){
	var text = '#{text}';
	alert(text);
	var body = $('textarea#body').val();
	var nickname = $('input#showas').val();
	$.ajax({
		url: '/addPost',
		type: 'post',
		data: {
			'nickname': nickname,
			'body': body
		}, 
		success: function(data, text){
            alert("Posted");
        },
        error: function(jqXHR, textStatus, errorThrown){
            showResultFailed(jqXHR.responseText);
            alert("Failed");
        }
	});
});
*/