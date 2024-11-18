import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blog = [
    {
      img: '../../../assets/blog/blog-05.jpg',
      date: '30 Oct',
      comment: ' 06 comment',
      title: 'Discover the Best Facial in Dubai for a Glowing, Radiant Look!',
    },
    {
      img: '../../../assets/blog/blog-01.jpg',
      date: '25 May',
      comment: ' 06 comment',
      title: 'Finding the Best Massage in Dubai'
    },
    {
      img: '../../../assets/blog/blog-07.jpg',
      date: '14 Aug',
      comment: ' 06 comment',
      title: 'The Best Hair Salon in Dubai You Need to Experience',
    },
    {
      img: '../../../assets/blog/blog-10.jpg',
      date: '09 Nov',
      comment: ' 06 comment',
      title: '5 Things You Most Likely Dont Know About Beauty',
    },
    {
      img: '../../../assets/blog/blog-06.jpg',
      date: '21 Jan',
      comment: ' 06 comment',
      title: 'What type of business is Beauty Salon',
    },
    {
      img: '../../../assets/blog/blog-03.jpg',
      date: '01 Dec',
      comment: ' 06 comment',
      title: 'Skills That You Can Learn From Beauty & Spa',
    }
  ]
}
