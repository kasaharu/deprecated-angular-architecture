import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HeroStoreModule } from './hero-store/hero-store.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({}), HeroStoreModule],
})
export class RootStoreModule {}
