import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-temp',
  template:'<p>Temp WORKS</p>'
})
export class TempComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("accountID", '1');
  }

}
