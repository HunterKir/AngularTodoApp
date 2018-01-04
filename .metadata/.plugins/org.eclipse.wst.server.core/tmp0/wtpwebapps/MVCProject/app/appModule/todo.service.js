angular.module('appModule').factory('todoService', function() {
     var service = {};
     var todos = [
                {
                  id : 1,
                  task : 'Go round mums',
                  description : '',
                  completed : false
                },
                {
                  id : 2,
                  task : 'Get Liz back',
                  description : '',
                  completed : false
                },
                {
                  id : 3,
                  task : 'Sort life out',
                  description : '',
                  completed :  false
                }];
     service.index = function() {
          return todos;
     };
     service.create = function(todo) {
          if (todo !== undefined) {
               if (todo.task !== undefined) {
                    todo.id = generateId();
                    todo.completed = false;
                    todo.description = '';
                    todos.push(todo);
               }
          }
     };
     service.update = function(todo) {
          var itemToUpdate;
          todos.forEach(function(item){
               if (item.id === todo.id) {
                    itemToUpdate = item;
               }
          });
          itemToUpdate.task = todo.task;
          itemToUpdate.description = todo.description;
          itemToUpdate.completed = todo.completed;
     };
     service.destroy = function(id) {
          todos.forEach(function(item, idx) {
               if (item.id === id) {
                    todos.splice(idx, 1);
               }
          });
     };
     var generateId = function() {
          return vm.todos[vm.todos.length-1].id + 1;
     };
     return service;
});
