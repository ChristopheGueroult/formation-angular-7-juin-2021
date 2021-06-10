export interface ClientI {
  state: string;
  tva: number;
  id: number;
  name: string;
  totalCaHt: number;
  comment: string;
  totalTTC(): number;
}
