import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // Wrapper with Navbar and Footer
    children: [
      { path: '', component: MainComponent }, // Default route inside HomeComponent
      { path: 'our-services', component: OurservicesComponent },
      { path: 'blog', component: BlogComponent },
      {path: 'our-services', component: OurservicesComponent}
    ],
  },
  // {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
