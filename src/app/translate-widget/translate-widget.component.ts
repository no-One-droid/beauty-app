import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-translate-widget',
  templateUrl: './translate-widget.component.html',
  styleUrls: ['./translate-widget.component.css']
})
export class TranslateWidgetComponent implements AfterViewInit, OnDestroy{

  private routeSubscription: any;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.loadGoogleTranslateScript();
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.refreshGoogleTranslate();
      }
    });
  }

  loadGoogleTranslateScript(): void {
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
  }

  refreshGoogleTranslate(): void {
    if (typeof google !== 'undefined' && google.translate) {
      const translateElement = new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'ar,de,en,nl,zh-CN,zh-TW',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    }
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
