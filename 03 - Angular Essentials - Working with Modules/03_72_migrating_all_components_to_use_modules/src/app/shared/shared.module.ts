import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';

/**
 * Merge all shared components into a unique SharedModule which can be imported in the app.module.ts
 */
@NgModule({
  declarations: [CardComponent], // <= Which components are needed by this module to function
  exports: [CardComponent], // <= Components available to any other modules that import this module
})
export class SharedModule {}
