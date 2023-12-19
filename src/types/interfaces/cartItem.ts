import { CartStatus } from '@/constants/cartStatus';

export interface CartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  type: number;
  status: CartStatus;
  guests: number;
  createdAt: Date;
  reservationDate: Date;
  reservationTime: Date;
}
