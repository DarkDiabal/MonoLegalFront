import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { InvoiceListColumns } from 'src/app/enums/invoice-list-columns.enum';
import { InvoiceListModel } from 'src/app/models/invoice-list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = [
    InvoiceListColumns.actions,
    InvoiceListColumns.invoiceCode,
    InvoiceListColumns.client,
    InvoiceListColumns.clientEmail,
    InvoiceListColumns.city,
    InvoiceListColumns.nit,
    InvoiceListColumns.invoiceTotal,
    InvoiceListColumns.invoiceSubTotal,
    InvoiceListColumns.iva,
    InvoiceListColumns.retention,
    InvoiceListColumns.createdAt,
    InvoiceListColumns.status,
    InvoiceListColumns.paid,
    InvoiceListColumns.paidAt,
  ];

  ELEMENT_DATA: InvoiceListModel[] = [];
  dataSource = new MatTableDataSource<InvoiceListModel>(this.ELEMENT_DATA);
  invoiceList = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.invoiceList as InvoiceListModel[];
  }

  updateStatus(row: any){

  }

}
