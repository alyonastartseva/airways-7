import React, { useState, useEffect } from 'react';

type FieldType = 'input' | 'select' | 'date';

export type AdminModalField = {
  title: string;
  name: string;
  type: FieldType;
  required?: boolean;
  options?: { value: string; label: string }[];
};

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

export const BaseAdminModal = <T,>({
  title,
  isOpen,
  onClose,
  fields,
  onSubmit,
  defaultValues = {},
  afterSuccess,
  errorFormatter,
}: BaseAdminModalProps<T>) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const init: Record<string, string> = {};
      fields.forEach((f) => {
        init[f.name] = defaultValues[f.name] ?? '';
      });
      setFormData(init);
      setErrors({});
      setGeneralError(null);
    }
  }, [isOpen, fields, defaultValues]);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    for (const field of fields) {
      if (field.required && !formData[field.name]) {
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
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.name} className="modal-field">
              <label>
                {field.title}
                {field.required && ' *'}
              </label>
              {field.type === 'input' && (
                <input
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              )}
              {field.type === 'select' && field.options && (
                <select
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                >
                  <option value="">Выберите...</option>
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              )}
              {field.type === 'date' && (
                <input
                  type="date"
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              )}
              {errors[field.name] && <div className="field-error">{errors[field.name]}</div>}
            </div>
          ))}
          {generalError && <div className="modal-error">{generalError}</div>}
          <div className="modal-actions">
            <button type="submit" disabled={submitting}>
              Сохранить
            </button>
            <button type="button" onClick={onClose} disabled={submitting}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
