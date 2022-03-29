import {Component} from '@angular/core';
import {PdfAndExcelDownloadService} from "../service/pdf-and-excel-download.service";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-successful-logged-in',
  templateUrl: './successful-logged-in.component.html',
  styleUrls: ['./successful-logged-in.component.css']
})
export class SuccessfulLoggedInComponent {

  constructor(private pdfExcelService: PdfAndExcelDownloadService, private loginService: UserService) {
  }

  private isZipped: boolean;

  private accountId: number;

  displayButtons: boolean = false;

  logout() {
    this.loginService.logout();
  }

  idForReport(value) {
    this.accountId = value;
    this.displayButtons = value.length != 0;
  }

  downloadPdf() {
    this.isZipped = false;
    this.pdfExcelService.downloadPdf(this.accountId, false);
  }

  downloadPdfZipped() {
    this.pdfExcelService.downloadPdfZip(this.accountId, true, 'PdfReport');
  }

  downloadExcel() {
    this.pdfExcelService.downloadExcel(this.accountId, false);
  }

  downloadExcelZipped() {
    this.pdfExcelService.downloadPdfZip(this.accountId, true, 'ExcelReport');

  }
}
