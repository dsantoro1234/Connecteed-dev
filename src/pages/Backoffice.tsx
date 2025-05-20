
import { useState } from "react";
import PasswordProtection from "@/components/backoffice/PasswordProtection";
import LeadsTable from "@/components/backoffice/LeadsTable";

const Backoffice = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="container mx-auto py-8 px-4">
      {!isAuthenticated ? (
        <PasswordProtection onAuthenticate={() => setIsAuthenticated(true)} />
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-8">Backoffice</h1>
          <LeadsTable />
        </div>
      )}
    </div>
  );
};

export default Backoffice;
