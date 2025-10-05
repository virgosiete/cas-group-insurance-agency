import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactFormData {
  name: string;
  email: string;
  business_type: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const { error } = await supabase
    .from('contacts')
    .insert([
      {
        name: data.name,
        email: data.email,
        business_type: data.business_type,
        message: data.message,
      },
    ]);

  if (error) {
    throw new Error(`Failed to submit form: ${error.message}`);
  }
}
