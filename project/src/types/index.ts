export interface Item {
  id: string;
  name: string;
  type: 'asset' | 'consumable';
  unit: string;
  location: string;
  currentStock: number;
  initialStock: number;
  price: number;
  category: string;
  minimumStock: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'staff' | 'auditor';
}

export interface ItemLog {
  id: string;
  itemId: string;
  quantity: number;
  userId: string;
  purpose: string;
  timestamp: Date;
  type: 'in' | 'out';
}