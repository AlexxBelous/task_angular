var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
	console.log("In myContoller...");
	
	$scope.newUser = {};
	$scope.checkedUser = {};
	$scope.message = "";


	$scope.departments = 
	[
		{NAME:"QA"},
		{NAME:"Development"},
		{NAME: "Management"}

	];

	$scope.selectedDeptFilter = function(user) {
		if ($scope.selectedDept && $scope.selectedDept.NAME) {
			return (user.DEPARTMENT === $scope.selectedDept.NAME);

		}
		return true;
	};


	$scope.users = 
	[
		{EMPLOYEE:"Zak Abel",DEPARTMENT:"QA"},
		{EMPLOYEE:"David Guetta", NOTES:"",DEPARTMENT:"Management", NOTES:""},
		{EMPLOYEE:"Marilyn Manson", NOTES:"",DEPARTMENT:"Development", NOTES:""},
		{EMPLOYEE:"Daniel Shake", NOTES:"",DEPARTMENT:"QA", NOTES:""},
		{EMPLOYEE:"John Doe", NOTES:"",DEPARTMENT:"Development", NOTES:""}




	];
	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "Employee added Successful";
	};

	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.updateUser = function(user){

	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
	};
});