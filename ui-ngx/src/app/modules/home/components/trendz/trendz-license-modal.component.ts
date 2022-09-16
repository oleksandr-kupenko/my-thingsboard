import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'tb-trendz-license-modal',
  templateUrl: './trendz-license-modal.component.html',
  styleUrls: ['./trendz-license-modal.component.scss']
})
export class TrendzLicenseModalComponent implements OnInit {
  public content!: string;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.dialogRef.close();
    }
  }

  constructor(public dialogRef: MatDialogRef<TrendzLicenseModalComponent>, private translate: TranslateService) {
  }

  ngOnInit() {
    this.addLinkToContent();
  }

  public onClose() {
    this.dialogRef.close();
  }

  public onConfirm() {
    this.dialogRef.close(true);
  }

  private addLinkToContent() {
    const translatedString = this.translate.instant('trendz.noLicense');
    this.content = translatedString.replace('Trendz Analytics',
      '<a href="https://thingsboard.io/products/trendz/" target="_blank">Trendz Analytics</a>');
  }
}
