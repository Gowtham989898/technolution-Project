import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {RestService} from '../rest.service'
import { from } from 'rxjs';


@Component({
  selector: 'app-resultboard',
  templateUrl: './resultboard.component.html',
  styleUrls: ['./resultboard.component.css']
})
export class ResultboardComponent implements OnInit {

  constructor( private htttp:HttpClient, private rs:RestService) { }
  data:any;
  ngOnInit() {

    this.rs.getData().subscribe(res=>{
      console.log(res);
      this.data=res;
    })
}

}
