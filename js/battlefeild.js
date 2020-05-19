$(document).ready(function(){
	$('#opponent-feild').click( function(){
		$('#opponent-feild').find('td').click( function(){
			$(this).css("background-color", "red");
			console.log('You clicked row '+ ($(this).closest('tr').index() +1) +' and column '+($(this).index()+1) );
		});
	});
});

function create_battle_map(){
	var matrix = [];
	for(var i=0; i<9; i++) {
		matrix[i] = [];
		for(var j=0; j<9; j++) {
			matrix[i][j] = 0;
		}
	}
	console.log(matrix);
	for (var i = 4; i > 0; i--) {
		for (var j = 0; j < 5-i; i++) {
			var orientation = Math.round(Math.random()); // 0 means horizontal, 1 means vertical.
			var x_limit = 10;
			var y_limit = 10;
			if (orientation==0){
				x_limit-=i+1;
			}
			else{
				y_limit-=i+1;
			}
			var flag = true;
			while(flag) {
				flag = false;
				var x_initial = Math.round(Math.random() * x_limit);
				var y_initial = Math.round(Math.random() * y_limit);
				for (var k = 0; k < i; k++) {
					if (orientation==0){
						if(matrix[x_initial+k][y_initial]==1){
							flag=true;
						}
					}
					else{
						if(matrix[x_initial][y_initial+k]==1){
							flag=true;
						}
					}
				}
				console.log("hello ji hello");
				if(flag == false) {
					for (var k = 0; k < i; k++) {
						if (orientation==0){
							matrix[x_initial+k][y_initial]=1;
						}
						else{
							matrix[x_initial][y_initial+k]=1;
						}
					}
				}
				console.log(matrix);
			}
		}
	}
	console.log(matrix);
}