import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { SharedModule } from '../shared/shared.module';

/**
 * As a rule, every Modules needs to be able to work on his own,
 * so if a Module needs something, it must declare or import it itself.
 *
 * Note that in this case, this module needs access to the DatePipe. We could import it as a Standalone in the `import` array.
 * But we can also import it through another module provided by Angular:
 *  - IMPORTANT: It is NOT `BrowserModule`, as it's a special module that's only meant to be imported in the root module, with which you bootstrap the application
 *  - For all other Modules that need access to such common features as the DatePipe, you can import the `CommonModule@angular/common` module.
 */
@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent], // <= Those Components are working with each other
  exports: [TasksComponent], // <= Only the TasksComponent is being called in the app.html
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
