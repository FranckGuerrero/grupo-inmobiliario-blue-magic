export type LeadFieldType = 'text' | 'tel' | 'email' | 'number' | 'select' | 'textarea';

export interface LeadField {
  name: string;
  label: string;
  type?: LeadFieldType;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  full?: boolean;
  autocomplete?: string;
  inputMode?: 'none' | 'text' | 'tel' | 'email' | 'numeric' | 'decimal' | 'search' | 'url';
  maxLength?: number;
}
