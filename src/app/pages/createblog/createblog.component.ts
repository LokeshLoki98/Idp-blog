import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  alldetails:any;
  a:any
  constructor( private data:DataService) { this.alldetails=new FormGroup({
    'title':new FormControl(null,Validators.required),
    'url':new FormControl(null,Validators.required),
    'author':new FormControl(null,Validators.required),
    'description':new FormControl(null,Validators.required),
    'content':new FormControl(null,Validators.required),
    'urlToImage':new FormControl(null,Validators.required)

  });}

  ngOnInit(): void {
  let lenght=this.data.array.length
this.alldetails.controls["url"].setValue("/blog/blog-"+lenght)
    
  }
blogs(data:any){
    this.a={
    title:data.value.title,
    url:data.value.url,
    author:data.value.author,
    description:data.value.description,
    content:data.value.content,
    urlToImage:data.value.urlToImage
  }
  this.data.create(this.a)
}

get title() {
  return this.alldetails.get('title');
}
get author() {
  return this.alldetails.get('author');
}
get description() {
  return this.alldetails.get('description');
}
get urlToImage() {
  return this.alldetails.get('urlToImage');
}
get content(){
  return this.alldetails.get('content');
}


}
