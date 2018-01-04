angular.module('appModule').component('todoList', {
     templateUrl : 'app/appModule/todoList/todoList.component.html',
     controller : function(todoService) {
          var flag = false;
          var vm = this;
          vm.selected = null;
          vm.editTodo = null;
          vm.todos = todoService.index();
          vm.getNumOfItems = function () {
               var count = 0;
               vm.todos.forEach(item => item.completed === false ? count++ : false);
               return count;
          };
          vm.doSomethingFun = function() {
               if (flag) {
                    $('body').css('background-color', 'rgb(' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ')');
                    $('input').css('background-color', 'rgb(' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ')');
                    $('button').css('background-color', 'rgb(' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ')');
                    $('body').css('color', 'rgb(' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ')');
                    $('tbody').css('background-color', 'rgb(' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ')');
                    $('#badButton').text('I warned you.');
               }
               if (!flag) {
                    $('#badButton').text('Seriously. You don\'t want to press this.');
                    flag = true;
               }
          };
          vm.addTask = function(todo) {
               todoService.create(todo);
               vm.todos = todoService.index();
          };
          vm.displayTodo = function(task) {
               vm.selected = task;
          };
          vm.displayTable = function() {
               vm.selected = null;
          };
          vm.setEditTodo = function() {
               vm.editTodo = angular.copy(vm.selected);
          };
          vm.resetEditTodo = function() {
               vm.editTodo = null;
          };
          vm.updateTodo = function(todo) {
               todoService.update(todo);
               vm.todos = todoService.index();
               vm.resetEditTodo();
          };
          vm.deleteTodo = function(id) {
               todoService.destroy(id);
               vm.todos = todoService.index();
          };
     },
     controllerAs : 'vm'
});
