import { createClient, SupabaseClient } from '@supabase/supabase-js';
import 'dotenv/config';


//imi iau valorile din .env
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

// creez un admin,doar odata, la start-ul aplicatiei, ii ofer putere asupra bazei de date si a tichetelor
export const supabaseAdmin: SupabaseClient = createClient(
  supabaseUrl,
  supabaseServiceKey,
  {
    auth: {
      autoRefreshToken: false,//serverul uita cine e adminul , nu il tine minte, pt securitate, adminul trebuie sa dovedeasca ca e intr-adevar admin
      persistSession: false, // el are o cheie de "master" el ramane permanent ca admin 
    },
  }
);
//de ce ii dau la functia de admin acele valori de la supabase?
//service role key = e puternica, trece de rls, si are acces la tot
//supabase url = il dau ca sa stie unde sa mearga


// functie de creeare a unui user angajat , e functie pt ca e o chestie repetitiva comparativ cu adminul
export function createUserClient(accessToken: string): SupabaseClient {
  return createClient(supabaseUrl, supabaseAnonKey, { // functia din libraria supabase
    global: { //ce se scrie aici este valabil pt toti clientii 
      headers: {
        Authorization: `Bearer ${accessToken}`, // se traduce ca fiind : aceasta persoana are codul de acces XYZ
      },
    },
  });
}
//supabse anonkey = trece prin rls, ii spune la supabse sa verifice ce tip de user este 
//si ce puteri are

//adminul nu are nevoie de accesToken deoarece el "detine" tot, userul este doar un vizitator