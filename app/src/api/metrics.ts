export interface IMetrics {
  id: string;
  label: string;
  value: number;
  type: string;
  description: string;
  category: string;
}

const HOST = "localhost"; // easily injected by remote address

export const URL = {
  getMetrics: `http://${HOST}:8000/metrics`,
};
