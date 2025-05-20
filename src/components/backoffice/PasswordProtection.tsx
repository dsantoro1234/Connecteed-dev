
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface PasswordProtectionProps {
  onAuthenticate: () => void;
}

const PasswordProtection = ({ onAuthenticate }: PasswordProtectionProps) => {
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === "admin") {
      onAuthenticate();
    } else {
      toast({
        title: "Errore di autenticazione",
        description: "La password inserita non è corretta.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="w-full max-w-md border-white/10">
        <CardHeader>
          <CardTitle className="text-center">Accesso Backoffice</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input 
                type="password" 
                placeholder="Inserisci la password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#171717] border-white/10"
              />
            </div>
            <Button type="submit" className="w-full">Accedi</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordProtection;
