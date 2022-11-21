import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'url-shortner';
  result: any;
  url: any;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
  }

  shortner() {
    this.dataService.getShortUrl(this.url).subscribe((val) => {
      this.result = val.result
    }, (err) => {
      alert(`Please input a valid URL`)
    })
    this.url = ""
  }

}
