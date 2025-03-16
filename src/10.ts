  import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schoolproject',
  templateUrl: './schoolproject.component.html',
  styleUrls: ['./schoolproject.component.css']
})
export class SchoolprojectComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
