export type Gender = 'MALE' | 'FEMALE';

export const GENDERS = ['MALE', 'FEMALE'] as const;
export const isGender = (v: unknown): v is Gender =>
  (GENDERS as readonly string[]).includes(v as string);
