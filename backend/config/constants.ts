//configurarea url-ului pt api-ul de la ai
export const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'http://localhost:8000';


//lista unde imi tin statusul unui tichet
export const TICKET_STATUSES = [
  'new',
  'assigned',
  'in_progress',
  'waiting_user',
  'resolved',
  'closed',
] as const;

//lista de prioritati a unui tichet
export const TICKET_PRIORITIES = ['low', 'medium', 'high', 'urgent'] as const;
//tipul de useri
export const USER_ROLES = ['admin', 'employee'] as const; //imp ca sa fie exportate ca si constante, nu vreau sa schimb aceste val

export type TicketStatus = (typeof TICKET_STATUSES)[number];
export type TicketPriority = (typeof TICKET_PRIORITIES)[number];
export type UserRole = (typeof USER_ROLES)[number];
//cand o sa ma folosesc mai tarziu de "listele" definite mai sus, daca scriu ceva gresit gen neu in loc de new
//typescript ma va avertiza, [number] inseamna ca compilatorul merge prin listele alea si match-uieste ce i-am dat 
//cu e in lista, number inseamna ca poate sa mearga prin orice index gen 0,1.. number



//definesc "buckets" pt supabase, ii spun unde vor fi salvate datele mele in supabase
export const BUCKETS = {
  DOCUMENTS: 'documents',
  TICKET_ATTACHMENTS: 'ticket-attachments',
  AVATARS: 'avatars',
} as const;


//acest fisier e un good-practice pt a ma scapa de bug-uri  (din cauza typeo-urilor) si mentenanta mai usoara