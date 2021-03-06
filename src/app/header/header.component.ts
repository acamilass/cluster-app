import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search = faSearch;

  constructor() { }

  ngOnInit() {
  }

  public onSearch(evento) {
    return evento.res;
  }

}
