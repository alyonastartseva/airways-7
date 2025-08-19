import styles from './BaseAdminModal.module.scss';
import type { AdminModalField } from './types';
import { Input, Select } from 'antd';
import { DatePicker } from 'antd';
import React, { useState, useEffect, useMemo } from 'react';

interface BaseAdminModalProps<T = unknown> {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  fields: AdminModalField[];
  onSubmit: (formData: Record<string, string>) => Promise<T>;
  defaultValues?: Record<string, string>;
  afterSuccess?: () => void;
  errorFormatter?: (e: unknown) => string;
}

export const BaseAdminModal = React.memo(
  <T,>({
    title,
    isOpen,
    onClose,
    fields,
    onSubmit,
    defaultValues,
    afterSuccess,
    errorFormatter,
  }: BaseAdminModalProps<T>) => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [generalError, setGeneralError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    defaultValues = useMemo(() => defaultValues || {}, [defaultValues]);

    useEffect(() => {
      if (!isOpen) return;
      const init: Record<string, string> = {};
      for (const f of fields) {
        init[f.name] = defaultValues[f.name] ?? '';
      }
      setFormData(init);
      setErrors({});
      setGeneralError(null);
    }, [isOpen, defaultValues, fields]);

    const handleChange = (name: string, value: string) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
      const errs: Record<string, string> = {};
      for (const field of fields) {
        if (field.required && !formData[field.name]?.trim()) {
          errs[field.name] = 'Обязательное поле';
        }
      }
      setErrors(errs);
      return Object.keys(errs).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;

      setSubmitting(true);
      try {
        await onSubmit(formData);
        afterSuccess?.();
        onClose();
      } catch (e) {
        const msg = errorFormatter?.(e) ?? 'Произошла ошибка';
        setGeneralError(msg);
      } finally {
        setSubmitting(false);
      }
    };

    if (!isOpen) return null;

    return (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          <h2 className={styles.title}>Создание {title.toLowerCase()}</h2>
          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div key={field.name} className={styles.formField}>
                <label className={styles.label}>
                  {field.title}
                  {field.required && ' *'}
                </label>

                {field.type === 'input' && (
                  <Input
                    value={formData[field.name] || ''}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}

                {field.type === 'select' && field.options && (
                  <Select
                    value={formData[field.name] || ''}
                    onChange={(val) => handleChange(field.name, val)}
                    options={field.options}
                  />
                )}

                {field.type === 'date' && (
                  <DatePicker
                    value={formData[field.name] || ''}
                    onChange={(date) => handleChange(field.name, date)}
                    placeholder=""
                  />
                )}

                {field.type === 'checkbox' && (
                  <input
                    type="checkbox"
                    value={formData[field.name] || ''}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}

                {errors[field.name] && <div className={styles.error}>{errors[field.name]}</div>}
              </div>
            ))}

            {generalError && <div className={styles.error}>{generalError}</div>}

            <div className={styles.actions}>
              <button type="submit" disabled={submitting} className={styles.submitButton}>
                Сохранить
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={submitting}
                className={styles.cancelButton}
              >
                Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  },
);
