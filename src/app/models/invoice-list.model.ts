export class InvoiceListModel{
    public id;
    public invoiceCode:string;
    public client:string;
    public clientEmail:string;
    public city:string;
    public nit:string;
    public invoiceTotal:number;
    public invoiceSubTotal:number;
    public iva:number;
    public retention:number;
    public createdAt:string;
    public status:string;
    public statusName:string;
    public paid:boolean;
    public paidName:string;
    public paidAt:string;
}