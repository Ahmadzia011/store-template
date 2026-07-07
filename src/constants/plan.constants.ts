export interface Plan {
  name: string;
  id: number;
  desc: string;
  price: number;
  credits: bigint;
}

export interface PlanProp {
    plans : Plan[]
}