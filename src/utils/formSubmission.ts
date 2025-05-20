import { useToast } from "@/hooks/use-toast";

// Define PageName type and export it
export type PageName = "connecteed-shop" | "headless" | "custom" | "landing-shop";

// Form data structure that matches our component state
export interface FormData {
  nome: string;
  email: string;
  telefono: string;
  azienda: string;
  messaggio: string;
  timeSlots: {
    morning: boolean;
    afternoon: boolean;
  };
}

// API request structure that matches the API requirements
interface ApiRequestData {
  Nome: string;
  Azienda: string;
  mail: string;
  phone: string;
  fascia_oraria: string;
  messaggio: string;
  page: string;
}

// Function to map form data to API request format
export const mapFormDataToApiRequest = (
  formData: FormData,
  pageName: PageName
): ApiRequestData => {
  // Determine time slot value based on selections
  let fasciaOraria = "";
  if (formData.timeSlots.morning && formData.timeSlots.afternoon) {
    fasciaOraria = "10-17";
  } else if (formData.timeSlots.morning) {
    fasciaOraria = "10-13";
  } else if (formData.timeSlots.afternoon) {
    fasciaOraria = "14-17";
  }

  return {
    Nome: formData.nome,
    Azienda: formData.azienda,
    mail: formData.email,
    phone: formData.telefono,
    fascia_oraria: fasciaOraria,
    messaggio: formData.messaggio,
    page: pageName,
  };
};

// Function to submit form data to the API
export const submitFormData = async (
  formData: FormData,
  pageName: PageName,
  toast: ReturnType<typeof useToast>["toast"]
): Promise<boolean> => {
  try {
    const apiUrl = "https://x2pc-uvhq-skfb.p7.xano.io/api:-L9k8Mho/connecteed_dev";
    const apiRequestData = mapFormDataToApiRequest(formData, pageName);
    
    console.log("Submitting form data:", apiRequestData);
    
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestData),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("API response:", responseData);
    
    toast({
      title: "Messaggio inviato",
      description: "Grazie per averci contattato. Ti risponderemo al più presto.",
    });
    
    return true;
  } catch (error) {
    console.error("Error submitting form:", error);
    
    toast({
      title: "Errore",
      description: "Si è verificato un errore nell'invio del messaggio. Riprova più tardi.",
      variant: "destructive",
    });
    
    return false;
  }
};

// Helper for determining the current page name from the URL path
export const getCurrentPageName = (): PageName => {
  const path = window.location.pathname;
  
  if (path.includes("connecteed-shop")) {
    return "connecteed-shop";
  } else if (path.includes("connecteed-headless")) {
    return "headless";
  } else if (path.includes("custom-ecosystem")) {
    return "custom";
  } else if (path.includes("landing-shop")) {
    return "landing-shop";
  }
  
  // Default to custom if we can't determine the page
  return "custom";
};
