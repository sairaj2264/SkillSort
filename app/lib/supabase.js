import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://scvwzcrugqcooagvxdib.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjdnd6Y3J1Z3Fjb29hZ3Z4ZGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzOTM2ODAsImV4cCI6MjA1OTk2OTY4MH0.B0_UXVLYESdBM4f57SBXUURiR_MRO5aKrjZOeSRThmQ';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; 