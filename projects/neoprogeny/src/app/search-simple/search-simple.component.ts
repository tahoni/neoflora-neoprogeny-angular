import {Component, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-simple',
  templateUrl: './search-simple.component.html',
  styleUrls: ['./search-simple.component.css']
})
export class SearchSimpleComponent implements OnInit {

  faSearch = faSearch;

  constructor() {
  }

  ngOnInit(): void {
  }

}
