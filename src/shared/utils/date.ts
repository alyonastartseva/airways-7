export const formatDate = (value: Date | string): string => {
  if (!value) return '';
  const date = value instanceof Date ? value : new Date(value);
  return date.toLocaleDateString('ru-RU');
};
