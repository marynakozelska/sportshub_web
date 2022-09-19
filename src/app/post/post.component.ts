import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  imageSrc = 'assets/images/img.png';
  title = 'Lorem ipsum';
  description = 'Lorem ipsum dolor sit amet, consectetur';

  constructor() { }

  ngOnInit(): void {
  }

}
