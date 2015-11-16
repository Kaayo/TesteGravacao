var scotchApp = angular.module('scotchApp',['ngRoute']); //estanciando objeto angular 

	scotchApp.config(function($routeProvider){ //Ojeto angular recebe e inicia uma função...
		$routeProvider

			//Condição...
			//quando estiver em determinado diretório html vá para tal URL...(tela)
			
			.when('/listar', { //quando diretório for "/listar" vá para tela de 'Listar Gravações' 
				templateUrl: 'url/listar.html'	

			})



			.when('/gravar', { //quando diretório for "/gravar" vá para tela de 'Iniciar Gravação' 
				templateUrl: 'url/gravar.html'	

			})

			
			.when('/salvar', { //quando diretório for "/salvar" vá para tela  'Salvar Gravação' 
				templateUrl: 'url/salvar.html'	

			})

			.when('/', { //quando diretório for "/#" vá para tela  'Principal' 
				templateUrl: 'url/menu.html'	

			});

		


			
			
	});

