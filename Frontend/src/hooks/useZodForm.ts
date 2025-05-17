import { useState } from 'react';
import { z } from 'zod';

export function useZodForm<T>(schema: z.ZodSchema<T>) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [data, setData] = useState<Partial<T>>({});

  const validate = (formData: unknown): formData is T => {
    const result = schema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path.join('.');
        newErrors[path] = issue.message;
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleChange = (name: keyof T, value: any) => {
    setData(prev => ({ ...prev, [name]: value }));
  };

  return {
    data,
    errors,
    validate,
    handleChange,
    setData
  };
} 