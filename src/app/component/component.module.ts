import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { BlogComponent } from './blog/blog.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MainComponent } from './main/main.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FirstBlogComponent } from './first-blog/first-blog.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    OurservicesComponent,
    BlogComponent,
    MainComponent,
    FirstBlogComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    NzIconModule,
    NzInputModule,
    NzTabsModule
  ]
})
export class ComponentModule { }
