import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo_list',
  standalone: true,
  templateUrl: './todo_list.component.html',
  styleUrl: './todo_list.component.css',
  imports: [RouterOutlet,NgFor,NgClass]
})
export class TodoListComponent {

  todoList: TodoItem[] = [];
    newTask: string = '';
    @ViewChild('todoText') todoInputRef: ElementRef<HTMLInputElement> = null!;


  addTask(text: string): void {
    if (text.trim() !== '') {
        const newTodoItem: TodoItem = {
            id: Date.now(),
            task: text.trim(),
            completed: false
        };
        this.todoList.push(newTodoItem);
        this.todoInputRef.nativeElement.value = '';
        this.saveTodoList();
    }
}

deleteTask(id: number): void {
  alert("ARE YOU SURE ! YOU WANTED TO DELETE THIS ?")
    this.todoList = this.todoList.filter(item => item.id !== id);
    this.saveTodoList();
}

toggleCompleted(id: number): void {
    const todoItem = this.todoList.find(item => item.id === id);
    if (todoItem) {
        todoItem.completed = !todoItem.completed;
        this.saveTodoList();
    }
}

saveTodoList(): void {
    console.log('todoList', JSON.stringify(this.todoList));

}

}
