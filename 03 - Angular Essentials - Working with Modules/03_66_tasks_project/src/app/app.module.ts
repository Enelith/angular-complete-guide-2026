import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app';
import { HeaderComponent } from './header/header';
import { TasksComponent } from './tasks/tasks';
import { UserComponent } from './user/user';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeaderComponent, TasksComponent, UserComponent],
})
export class AppModule {}
