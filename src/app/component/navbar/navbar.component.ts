import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  hoveredItem: string| null = null;
  navbarScrolled: boolean = false;
  isSearchDropdownOpen: boolean = false;
 menuItem = [
  {
    title : 'home',
    categories: [],
    routLink: ''
  },
  {
    title : 'our Services',
    categories: [
      {name: "Eyelesh Service", rout: 'eyeLash'},
      {name: "Hair Service", rout: 'hair'},
      {name: "Nail Service", rout: 'nail'},
      {name: "Make Up Service", rout: 'make-Up'},
      {name: "Facial Service", rout: 'Facial'},
      {name: "Body Wax Service", rout: 'body-Wax'},
      {name: "Massage Home Service", rout: 'massage'},
     ],
    routLink: 'our-services'
  },
  {
    title : 'contact',
    categories: [],
    // fragment: 'contact',
    routLink: 'contact'
  },
  {
    title : 'About',
    categories: [],
    fragment: 'about',
    routLink: ''
  },
  {
    title : 'Blog',
    categories: [],
    routLink: 'blog'
  },
 ]
 isOffcanvasOpen: boolean = false;

 constructor( private elRef: ElementRef, private render: Renderer2, private router: Router, private viewpScroll: ViewportScroller){}
 ngOnInit(): void {
   
 }
@HostListener('window: scroll', [])
onWindowScroll(){
  const navbar = this.elRef.nativeElement.querySelector('#main-navbar');
  if (window.scrollY > 0) {
    this.render.addClass(navbar, 'navbar-after-scroll');
    this.navbarScrolled = true;
  } else {
    this.render.removeClass(navbar, 'navbar-after-scroll')
    this.navbarScrolled = false;
  }
}

 onHovered(title: string){
  this.hoveredItem = title;
 }
 onLeave(){
  setTimeout( ()=> {
    this.hoveredItem = null;
  }, 4000)
 }

 goToContact(){
  this.router.navigate(['']).then(()=>{
    this.viewpScroll.scrollToAnchor('contact');
  });
 }

 toggleSearchDropdown(){
  this.isSearchDropdownOpen = !this.isSearchDropdownOpen;
 }

//handle offcanvas open and close on different screens

//  toggleOffcanvas():void {
//   this.isOffcanvasOpen = !this.isOffcanvasOpen;
// }

//  @HostListener('window:resize', ['$event']);
//  onResize(event: Event):void{
//   const windowWidth = (event.target as Window).innerWidth;
//   if (windowWidth >= 992) {
//     this.isOffcanvasOpen = false;
//   }
//  }
}
