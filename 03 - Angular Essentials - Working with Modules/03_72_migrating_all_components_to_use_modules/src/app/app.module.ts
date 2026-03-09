import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HeaderComponent, UserComponent],
  imports: [
    BrowserModule,
    SharedModule,
    TasksModule,
  ],
})
export class AppModule {}
