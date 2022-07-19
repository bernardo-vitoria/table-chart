export interface IMetric {
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
  updateMetric: (id: string) => `http://${HOST}:8000/metrics/${id}`,
};
