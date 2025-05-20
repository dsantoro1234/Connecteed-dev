
import { useQuery } from "@tanstack/react-query";

export interface Lead {
  id: number;
  created_at: number;
  Nome: string;
  Azienda: string;
  mail: string;
  phone: string;
  fascia_oraria: string;
  messaggio: string;
  page: string;
}

const fetchLeads = async (): Promise<Lead[]> => {
  const response = await fetch("https://x2pc-uvhq-skfb.p7.xano.io/api:-L9k8Mho/connecteed_dev");
  
  if (!response.ok) {
    throw new Error(`API request failed with status: ${response.status}`);
  }
  
  return response.json();
};

export const useLeads = () => {
  return useQuery({
    queryKey: ["leads"],
    queryFn: fetchLeads,
  });
};
