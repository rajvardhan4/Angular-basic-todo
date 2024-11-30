import { Routes } from '@angular/router';

export const routes: Routes = [
    {

        path: "",
        pathMatch: "full",
        loadComponent: () => { return import("./component/todo_list/todo_list.component").then((m) => m.TodoListComponent) }

    },


    



];
