
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  id:any;
  individual:any;
  array1:any
 array:any
 url:any;
 u:any;
  constructor(private data:DataService,private router:Router) { 
    // this.array1=this.data.array;
  

  }

  ngOnInit(): void {
    this.url=this.router.url
    
    this.u=this.url.replace("/detailpage","");
    
    this.data.array.forEach( (value:any) => {
      console.log(value)
    var blogurl=value.url
      console.log(blogurl)
    if(blogurl==this.u){
     this.array=value
    }
    });

  }


}