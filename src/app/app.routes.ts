import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';

// Définir les routes de l'application
export const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'new', component: TodoTemplateDrivenFormComponent },
  { path: 'sign-in', component: TodoReactiveFormComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }, // Redirection par défaut
];

// Déclarer et exporter le module de routage
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {} // Nom personnalisé pour éviter les conflits