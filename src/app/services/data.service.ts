import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  array:any;
  local:any;
  constructor(private data:HttpClient,private viewdetail:ActivatedRoute) {
    this.storage();
    this.getstorage();
   }
  blogs():Observable<any>{
    return  this.data.get<any>("https://api.json-generator.com/templates/VUDUZd4V3QyJ/data?access_token=sdxv5aybndbk39af52pub0x8rlmyp6usm4glpoh2");
   }
   storage(){
    this.blogs().subscribe(data=>{
      let local=localStorage.getItem("data")
      if(local==null){
        localStorage.setItem ("data",JSON.stringify(data.articles))
      }
    })
   }

   getstorage(){
    this.local=localStorage.getItem("data")
    this.array=JSON.parse(this.local)
    
   }

individualBlog(x:any){
  return this.array[x];
}

create(a:any){
  this.array.push(a);
  localStorage.setItem("data",JSON.stringify(this.array))

}

}
