export interface Category {
    id: number;
    categoriaName: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface ProductWithCategory {
    id: number;
    productname: string;
    barcode: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    categoriaId: number;
    categorium: Category;
  }