import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserInputComponent } from './user-input';

@NgModule({
  declarations: [UserInputComponent],
  exports: [UserInputComponent],
  imports: [FormsModule],
})
export class UserInputModule {}
