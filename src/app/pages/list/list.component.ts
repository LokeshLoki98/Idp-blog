import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // getlocal:any=[];

  array1:any;
  date:any;
  constructor(private data:DataService,private router:Router) { }
  readmore(){
    this.router.navigateByUrl('blogs')
  }

  ngOnInit(): void {
    // this.getlocal=localStorage.getItem("data")
    // this.array=JSON.parse(this.getlocal)
    this.array1=this.data.array;
    this.date=this.array1.publishedAt;

  }

}
