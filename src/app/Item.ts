export interface Item {
 
  id: number;
  name: string;
  specifications: {
    color: string;
    weight: string;
    storage: string;
    price: string;
  },
  picture: string;
  quantity : number;
}