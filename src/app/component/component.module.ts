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
import { EyelashServiceComponent } from './eyelash-service/eyelash-service.component';
import { NailServiceComponent } from './nail-service/nail-service.component';
import { FacialServiceComponent } from './facial-service/facial-service.component';
import { MakeUpServiceComponent } from './make-up-service/make-up-service.component';
import { HairServiceComponent } from './hair-service/hair-service.component';
import { BodyWaxServiceComponent } from './body-wax-service/body-wax-service.component';
import { MassageServiceComponent } from './massage-service/massage-service.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    OurservicesComponent,
    BlogComponent,
    MainComponent,
    FirstBlogComponent,
    EyelashServiceComponent,
    NailServiceComponent,
    FacialServiceComponent,
    MakeUpServiceComponent,
    HairServiceComponent,
    BodyWaxServiceComponent,
    MassageServiceComponent,
    ContactComponent
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
