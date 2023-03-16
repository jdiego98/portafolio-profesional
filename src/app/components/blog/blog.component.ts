import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  cards = [
    { title: 'Blog 1', image: '', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Blog 2', image: '', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Blog 3', image: '', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Blog 4', image: '', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'Blog 5', image: '', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'Blog 6', image: '', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Blog 7', image: '', content: 'Sed do eiusmod tempor incididunt ut labore et dolore'},
    { title: 'Blog 8', image: '', content: 'Sed do eiusmod tempor incididunt ut labore et dolore'},
  ];

}
