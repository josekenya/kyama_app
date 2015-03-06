myApplication.controller("dashController",function($scope){
  $scope.moveToChat=function(){
  	//console.log('chat');
  	  PUSH({url:"chats.html",transition:"slide-in"});
  },
  $scope.moveToMembers=function(){
  	//console.log('members');
  	  PUSH({url:"members_page.html",transition:"slide-in"});
  },
  $scope.moveToContributions=function(){
  	//console.log('contributions');
  	  PUSH({url:"contributions.html",transition:"slide-in"});
  },
  $scope.moveToActivities=function(){
  	//console.log('activities');
  	  PUSH({url:"activities.html",transition:"slide-in"});
  }
  //call functions
  //$scope.moveToChat();
 /// $scope.moveToMembers();
  //$scope.moveToContributions();
  //$scope.moveToActivities();
});