var CFService = {

		convert: function(celsius, callback){
				$.ajax({
					url: 'services/cf.action.php',
					data: {'celsius':celsius},
					sucess: function(result){
						callback(parseFloat(result));
					},
					erro: function(){
						callback(null);
					}	


				});

		}


};