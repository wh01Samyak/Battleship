$(document).ready(function(){
	$('#opponent-feild').click( function(){
		$('#opponent-feild').find('td').click( function(){
			$(this).css("background-color", "red");
			console.log('You clicked row '+ ($(this).closest('tr').index() +1) +' and column '+($(this).index()+1) );
		});
	});
});