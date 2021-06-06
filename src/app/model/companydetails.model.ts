import { Injectable } from '@angular/core';

@Injectable()
export class CompanyDetailsModel {
  public companyInfo: any = {
    name: 'Productos para el hogar',
    address: 'Presbitero Medina #2597',
    city: 'La Paz - Bolivia',
    pincode: '12345',
    email: 'stephanie.saavedra@ucb.edu.bo',
    phone: '+591 73218363'
  };
}
