import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudProductosService {


  constructor() { }



  async getCategories(){
  
  return await (window as any).electronAPI.getCategories();
  }
}
