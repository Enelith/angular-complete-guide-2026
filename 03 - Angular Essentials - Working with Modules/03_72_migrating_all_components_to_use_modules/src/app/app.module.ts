import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { CardComponent } from './shared/card/card';
import { TasksComponent } from './tasks/tasks';
import { TaskComponent } from './tasks/task/task';
import { NewTaskComponent } from './tasks/new-task/new-task';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

    HeaderComponent,

    UserComponent,
    CardComponent,

    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  imports: [
    BrowserModule, // BrowserModule already includes the DatePipe component needed by TaskComponent, no need to import it again
    FormsModule,
  ],
})
export class AppModule {}
