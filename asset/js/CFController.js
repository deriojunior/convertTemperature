var CFController = {

		init: function(){

				CFController.setForm();

		},

		setForm: function () {
			
			var form = document.querySelector('form');
			form.addEventListener('submit', function(event){
					CFController.calculateCF(form);
					//it is necessary to avoid form submition
					//É necessário evitar formulario de submissão	
					event.preventDefault();	
			});

		},

		calculateCF: function(form){

				var celsius = parseFloat(form.celsius.value),
					result = 0;

				var callback = function(result){
						CFController.showResult(result);

//			result=CFService.convert(celsius);
			
//			CFController.showResult(result);
				
				};

				CFController.showLoading(true);
				/*global CFService*/ CFService.convert(celsius,callback);
		},

		showResult: function(result){

				var spanResult=document.querySelector('.result'); //pq .result? , o q é querySelector ?
				spanResult.innerHTML = result.toFixed(2);
				CFController.showLoading(false);			

		},


		showLoading: function(isLoading){
				document.querySelector('.label').innerHTML = isLoading ? 'Loading ...' : 'Fahrenheit result'

		}


};

//initialization
//inicialização

CFController.init();