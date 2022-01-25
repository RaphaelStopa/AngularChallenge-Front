import { Sale } from './sale.model';
import { Product } from './product.model';
import { User } from './user.model';
export class PurchaseItem {
  id: number;
  isFinished: boolean;
  productQuantity: number;
  totalPrice: number;
  user: User;
  product: Product;
  sale: Sale;
  finished: boolean;
}


