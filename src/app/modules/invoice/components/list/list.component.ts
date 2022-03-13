import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { InvoiceListColumns } from 'src/app/enums/invoice-list-columns.enum';
import { InvoiceListModel } from 'src/app/models/invoice-list.model';
import { InvoiceService } from 'src/app/services/invoice.service';

import Swal from 'sweetalert2'

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
    private invoiceService: InvoiceService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.invoiceList as InvoiceListModel[];
    this.getInvoicesList();
  }

  getInvoicesList(){
    this.invoiceService.getInvoiceList().subscribe((res: any) => {
      if(res.succeeded){
        this.invoiceList = res.result;
        this.dataSource.data = this.invoiceList;
        this.spinner.hide();
      }else{
        Swal.fire({
          title: 'Ups!',
          text: 'Ocurrio un error al consultar las facturas',
          icon: 'error',
          confirmButtonText: 'Cerrar'
        })
      }
    });
  }

  updateStatus(row: any){
    Swal.fire({
      icon: 'warning',
      title: 'Cuidado',
      text: '¿Estas seguro que desear notificar?',
      allowOutsideClick: false,
      showDenyButton: true
    }).then((result) => {
        if(result.isConfirmed){
          this.spinner.show();
          debugger;
        switch(row.status) { 
          case 'PrimerRecordatorio': { 
            row.status = 'SegundoRecordatorio';
            break; 
          } 
          case 'SegundoRecordatorio': { 
            row.status = 'Desactivado';
            break; 
          } 
          default: { 
            //statements; 
            break; 
          } 
        }
    
        this.invoiceService.updateInvoice(row).subscribe((res: any) => {
          this.spinner.hide();
          if(res.succeeded && res.errorResult == null){
            Swal.fire({
              title: 'Bien!',
              text: res.result,
              icon: 'success',
              confirmButtonText: 'Cerrar'
            })
          }
        });
      }
      });
  }

}
