export const URL_BASE = 'http://localhost:5017/api/v1';

export function formatValue(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'never',
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-br', {
    timeStyle: 'medium',
    dateStyle: 'short',
  }).format(new Date(date));
}
