import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TrendzLicenseModalComponent} from '@home/components/trendz/trendz-license-modal.component';

@Component({
  selector: 'tb-trendz',
  templateUrl: './trendz.component.html',
  styleUrls: ['./trendz.component.scss']
})
export class TrendzComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // TODO add link to trenz
    window.open(
      'https://google.com',
      '_blank'
    );
  }
}
