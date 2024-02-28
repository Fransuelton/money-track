export interface IPiggyBank {
  userId: string;
  name: string;
  initialDeposit: number;
  targetAmount: number;
  motivation: string;
  createdAt: Date;
}

export interface IPiggyBankGetType {
  id: string;
  userId: string;
  name: string;
  initialDeposit: number;
  targetAmount: number;
  motivation: string;
  createdAt: Date;
}
