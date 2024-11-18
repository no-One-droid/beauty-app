import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'our-services', component: OurservicesComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'main', component: MainComponent},
  {path: 'main', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
