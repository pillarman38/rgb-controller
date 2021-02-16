import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rgb-controller';

  constructor(private http: HttpClient){}
  
  rgbPoster(e) {
    console.log(e);
    
    this.http.post("http://192.168.1.74:4012/api/rgb/modechanger", {mode: e}).subscribe((res) => {
      console.log(res);
    })
  }
}
