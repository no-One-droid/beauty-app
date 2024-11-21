import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';
import { EyelashServiceComponent } from './eyelash-service/eyelash-service.component';
import { MakeUpServiceComponent } from './make-up-service/make-up-service.component';
import { HairServiceComponent } from './hair-service/hair-service.component';
import { NailServiceComponent } from './nail-service/nail-service.component';
import { FacialServiceComponent } from './facial-service/facial-service.component';
import { MassageServiceComponent } from './massage-service/massage-service.component';
import { BodyWaxServiceComponent } from './body-wax-service/body-wax-service.component';
import { FirstBlogComponent } from './first-blog/first-blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // Wrapper with Navbar and Footer
    children: [
      { path: '', component: MainComponent }, // Default route inside HomeComponent
      { path: 'blog', component: BlogComponent },
      {path: 'blog-detail', component: FirstBlogComponent},
      {path: 'our-services', component: OurservicesComponent},
      {path: 'eyeLash', component: EyelashServiceComponent},
      {path: 'make-Up', component: MakeUpServiceComponent},
      {path: 'hair', component: HairServiceComponent},
      {path: 'nail', component: NailServiceComponent},
      {path: 'Facial', component: FacialServiceComponent},
      {path: 'massage', component: MassageServiceComponent},
      {path: 'body-Wax', component: BodyWaxServiceComponent},
 
  
    ],
  },
  // {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
