$(document).ready(function(){
	$('#feild').click( function(){
		$('#feild').find('td').click( function(){
			console.log('You clicked row '+ ($(this).closest('tr').index() +1) +' and column '+($(this).index()+1) );
		});
	});
});