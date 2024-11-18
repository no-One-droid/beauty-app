import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  ourServices = [
    {
      url: '../../../assets/icon-35.png',
      title:  'Facial Treatments',
      detail: 'We choose only natural products for our procedures'
    },
    {
      url: '../../../assets/icon-08.png',
      title:  'Body Waxing',
      detail: 'We choose only natural products for our procedures'
     },
     {
      url: '../../../assets/icon-09.png',
      title:  'Oil Therapy',
      detail: 'We choose only natural products for our procedures'
     },
     {
      url: '../../../assets/icon-10.png',
      title:  'Modern Beauty',
      detail: 'We choose only natural products for our procedures'
     }
  ]

  OurProcess = [
    {
      url: '../../../assets/process-01.jpg',
      title:  'Get A Free Quotes',
      detail: 'From classic manicures and pedicures to intricate nail art and personalized nail extensions'
    },
    {
      url: '../../../assets/process-02.jpg',
      title:  'Meeting',
      detail: 'From classic manicures and pedicures to intricate nail art and personalized nail extensions'
     },
     {
      url: '../../../assets/process-03.jpg',
      title:  'Treatment',
      detail: 'From classic manicures and pedicures to intricate nail art and personalized nail extensions'
     },
     {
      url: '../../../assets/process-04.jpg',
      title:  'Finalizing',
      detail: 'From classic manicures and pedicures to intricate nail art and personalized nail extensions'
     }
  ]

  ourPricesR1 = [
    {
      url: '../../../assets/pricing5.jpg',
      title: 'Ultra Glow Therapy',
      detail: 'Lorem ipsum dolor sit amet',
      price: '$90.00'
    },
    {
      url: '../../../assets/pricing6.jpg',
      title: 'Beauty Treatments',
      detail: 'Lorem ipsum dolor sit amet',
      price: '$59.00'
    },
    {
      url: '../../../assets/pricing7.jpg',
      title: 'Hair Treatments',
      detail: 'Lorem ipsum dolor sit amet',
      price: '$70.00'
    }
  ]
  ourPriceR2 = [
    {
      url: '../../../assets/pricing8.jpg',
      title: 'Skin Care & Facial',
      detail: 'Lorem ipsum dolor sit amet',
      price: '$62.00'
    },
    {
      url: '../../../assets/pricing9.jpg',
      title: 'Face Procedures',
      detail: 'Lorem ipsum dolor sit amet',
      price: '$79.00'
    },
    {
      url: '../../../assets/pricing10.jpg',
      title: 'Quick Fix Makeup',
      detail: 'Lorem ipsum dolor sit amet',
      price: '$30.00'
    }
  ]

  aboutItems = [
    {
      title: 'Philosophy',
      image: '../../../assets/blog-08.jpg',
      heading: 'Belive in Beauty',
      subHeading: 'Sustainability Is The Heart of Everything We Do',
      content: "We believe that beauty is not just skin deep, and that self-care is an essential part of overall wellness. Our approach to beauty services is holistic, incorporating wellness treatments and relaxation techniques to enhance the mind-body connection at the Privacy of your Home"
    },
    {
      title: 'Story',
      image: '../../../assets/blog-04.jpg',
      heading: 'What We Do',
      subHeading: 'Book & Feel Our Incredible Experience',
      content: ' Provides beauty and wellness treatments at clients homes,  who prefer the privacy and comfort of their own homes, have busy schedules, or may find it challenging to visit a salon in person'
    },
    {
      title: 'Benifits',
      image: '../../../assets/blog-03.jpg',
      heading: 'Personalized Treatments',
      subHeading: 'Luxury Beauty, Right at Your Doorstep',
      content: "Enjoy unparalleled convenience with luxury beauty treatments brought right to your home. Skip the travel and wait times, Our experienced professionals tailor each session to your unique needs, ensuring a personalized and exceptional experience."
    }
  ]

  constructor(){}
  ngOnInit(): void {
    
  }
}
