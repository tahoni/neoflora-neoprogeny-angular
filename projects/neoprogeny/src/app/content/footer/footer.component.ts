import {Component, OnInit} from '@angular/core';
import {IconService} from "../../icon.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public iconService: IconService) {
  }

  ngOnInit(): void {
  }

}
