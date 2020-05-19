import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TodoFormComponent } from "./todo-form/todo-form.component";

import { IonicModule } from "@ionic/angular";

import { TodoPageRoutingModule } from "./todo-routing.module";

import { TodoPage } from "./todo.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TodoPageRoutingModule],
  declarations: [TodoPage, TodoFormComponent]
})
export class TodoPageModule {}
