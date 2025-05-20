
import { useLeads } from "@/hooks/useLeads";
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/utils/formatDate";
import { ChevronDown, ChevronUp } from "lucide-react";

const LeadsTable = () => {
  const { data: leads, isLoading, error } = useLeads();
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  
  const filteredLeads = leads?.filter(lead => 
    lead.Nome?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lead.Azienda?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.mail?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  
  if (isLoading) return <div>Caricamento in corso...</div>;
  if (error) return <div>Si è verificato un errore: {error.message}</div>;
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Lead ({leads?.length || 0})</h2>
        <Input
          placeholder="Cerca per nome, azienda o email"
          className="max-w-xs bg-[#171717] border-white/10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="rounded-md border border-white/10 overflow-hidden">
        <Table>
          <TableCaption>Lista delle richieste ricevute</TableCaption>
          <TableHeader>
            <TableRow className="bg-[#171717] hover:bg-[#171717]">
              <TableHead className="text-white">ID</TableHead>
              <TableHead className="text-white">Data</TableHead>
              <TableHead className="text-white">Nome</TableHead>
              <TableHead className="text-white">Azienda</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white">Telefono</TableHead>
              <TableHead className="text-white">Fascia oraria</TableHead>
              <TableHead className="text-white">Pagina</TableHead>
              <TableHead className="text-white w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads && filteredLeads.length > 0 ? (
              filteredLeads.map((lead) => (
                <>
                  <TableRow 
                    key={`row-${lead.id}`} 
                    className="bg-[#101010] hover:bg-[#171717] cursor-pointer"
                    onClick={() => toggleRow(lead.id)}
                  >
                    <TableCell>{lead.id}</TableCell>
                    <TableCell>{formatDate(lead.created_at)}</TableCell>
                    <TableCell>{lead.Nome || "-"}</TableCell>
                    <TableCell>{lead.Azienda || "-"}</TableCell>
                    <TableCell>{lead.mail || "-"}</TableCell>
                    <TableCell>{lead.phone || "-"}</TableCell>
                    <TableCell>{lead.fascia_oraria || "-"}</TableCell>
                    <TableCell>{lead.page || "-"}</TableCell>
                    <TableCell className="text-right pr-4">
                      {expandedRow === lead.id ? 
                        <ChevronUp className="inline-block w-4 h-4" /> : 
                        <ChevronDown className="inline-block w-4 h-4" />
                      }
                    </TableCell>
                  </TableRow>
                  {expandedRow === lead.id && (
                    <TableRow className="bg-[#171717]">
                      <TableCell colSpan={9} className="pb-4">
                        <div className="px-4">
                          <div className="font-medium text-sm mb-1">Messaggio:</div>
                          <div className="bg-[#101010] p-3 rounded-md whitespace-pre-wrap">
                            {lead.messaggio || "Nessun messaggio"}
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-6">
                  Nessun risultato trovato
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeadsTable;
