import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {saveAs} from 'file-saver';
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class PdfAndExcelDownloadService {

  constructor(private http: HttpClient) {
  }

  private readonly apiUrl = 'http://localhost:8080';

  downloadPdf(id: number, isZipped: boolean) {
    return this.http.post(`${this.apiUrl}/ViewInFile/PdfReport/?id=${id}&isZipped=${isZipped}`,
      {location: "accountReport.pdf"}, {responseType: 'blob'})
      .subscribe(data => {
          let file = new Blob([data], {type: 'application/pdf'});
          saveAs(file, 'accountReport.pdf');
        },
        e => {
          throwError(e);
        }
      );
  }

  downloadExcel(id: number, isZipped: boolean) {
    return this.http.post(`${this.apiUrl}/ViewInFile/ExcelReport/?id=${id}&isZipped=${isZipped}`,
      {location: "accountReport.xlsx"}, {responseType: 'blob'})
      .subscribe(data => {
          let file = new Blob([data], {type: 'application/octet-stream'});
          saveAs(file, 'accountReport.xlsx');
        },
        e => {
          throwError(e);
        }
      );
  }

  downloadPdfZip(id: number, isZipped: boolean, archiveContainer: string) {
    return this.http.post(`${this.apiUrl}/ViewInFile/${archiveContainer}/?id=${id}&isZipped=${isZipped}`,
      {location: "accountReport.zip"}, {responseType: 'arraybuffer'})
      .subscribe(data => {
          let file = new Blob([data], {type: 'application/zip'});
          saveAs(file, 'accountReport.zip');
        },
        e => {
          throwError(e);
        }
      );
  }

}
