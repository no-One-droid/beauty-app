import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {

ourServices = [
  {
    serviceImg: '../../../assets/service/service-7.jpg',
    serviceIcon: '../../../assets/icons/icon-21.png',
    serviceTitle: 'Evelash Services',
    serviceDetail: 'From Russian lashes that give you a dramatic look to lashlift to enhance your natural lashes.',
    routeLink: '/eyeLash'
  },
  {
    serviceImg: '../../../assets/service/service-17.jpg',
    serviceIcon: '../../../assets/icons/icon-22.png',
    serviceTitle: 'Nail Services',
    serviceDetail: 'we will take care of all your nail needs, Choose from a wide range of polishes, designs and styles.',
     routeLink: '/nail'
  },
  {
    serviceImg: '../../../assets/service/service-121.jpg',
    serviceIcon: '../../../assets/icons/icon-39.png',
    serviceTitle: 'Hair Services',
    serviceDetail: 'Our team of experts offers a comprehensive range of hair treatments, from simple trims to glamorous updos.',
    routeLink: '/hair'
  },
  {
    serviceImg: '../../../assets/service/service-04.jpg',
    serviceIcon: '../../../assets/icons/icon-40.png',
    serviceTitle: 'Make Up Sercises',
    serviceDetail: 'we believe that makeup is an art form. Our goal is to make every client look and feel their best.',
    routeLink: '/make-Up'
  },
  {
    serviceImg: '../../../assets/service/service-05.jpg',
    serviceIcon: '../../../assets/icons/icon-38.png',
    serviceTitle: 'Body  Waxing',
    serviceDetail: ' Our waxing services are fast, efficient, and performed with the utmost care to minimize discomfort.',
    routeLink: '/body-Wax'
  },
  {
    serviceImg: '../../../assets/service/service-01.jpg',
    serviceIcon: '../../../assets/icons/icon-22.png',
    serviceTitle: 'Massage Therapy',
    serviceDetail: 'Our home massage service is perfect for anyone looking to unwind and relax without ever leaving the house.',
    routeLink: '/massage'
  },
  {
    serviceImg: '../../../assets/service/service-06.jpg',
    serviceIcon: '../../../assets/icons/icon-40.png',
    serviceTitle: 'Facial Cleansing',
    serviceDetail: 'we understand the importance of taking care of your skin, and what better way to do that than with our facials?',
    routeLink: '/Facial'
  },
]
  constructor(){}
  ngOnInit(): void {
    
  }
}
