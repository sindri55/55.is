export interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  services: string[];
  budget?: string;
  message?: string;
  context: string;
  pageUrl?: string;
}
