import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  array1:any;
  a:any;
  route:any;
  constructor(private data:DataService,private router:Router,private viewdetail:ActivatedRoute) {}

  view(detail:any){
    console.log(detail)
    this.a=detail;
    this.router.navigateByUrl("detailpage"+this.a)

  
  }
  
  ngOnInit(): void {
    this.array1=this.data.array;

  }


}
