import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TodoAcceuilComponent } from '../component/todo-acceuil/todo-acceuil.component';
import { TodoVizComponent } from '../component/todo-viz/todo-viz.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,TodoAcceuilComponent,TodoVizComponent]
})
export class HomePageModule {}
