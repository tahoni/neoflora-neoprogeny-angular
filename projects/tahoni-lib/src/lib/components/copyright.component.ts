import {Component, OnInit} from '@angular/core';
import {CopyrightService} from '../services/copyright.service';

@Component({
  selector: 'lib-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  constructor(public copyrightService: CopyrightService) {
  }

  ngOnInit(): void {
  }

}
