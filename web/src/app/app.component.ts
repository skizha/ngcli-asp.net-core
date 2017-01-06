import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  values:any;

  constructor(private httpservice:Http){
  }

  ngOnInit(){
    this.getValues().subscribe(data=> this.values = data);
  }

  getValues() {
    return this.httpservice.get(window.location.origin+'/api/values')
    .map((response:Response) => response.json());
  }
  title = 'Cat Facts !';
}
