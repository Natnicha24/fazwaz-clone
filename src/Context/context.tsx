// SettingContext.tsx
import { createContext, useState, useContext, ReactNode } from "react";

interface SettingContextType {
  currentCurrency: string;
  setCurrentCurrency: React.Dispatch<React.SetStateAction<string>>;
  currentLanguage: string;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const SettingContext = createContext<SettingContextType | undefined>(undefined);

// 3. ฟังก์ชัน Provider ที่รับ children
function Provider({ children }: { children: ReactNode }) {
  const [currentCurrency, setCurrentCurrency] = useState("THB - ฿");
  const [currentLanguage, setCurrentLanguage] = useState("ภาษาไทย - TH");

  const valueToShare: SettingContextType = {
    currentCurrency,
    setCurrentCurrency,
    currentLanguage,
    setCurrentLanguage,
  };

  return (
    <SettingContext.Provider value={valueToShare}>
      {children}
    </SettingContext.Provider>
  );
}

function useSetting() {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error("useSetting must be used within a Provider");
  }
  return context;
}

export { Provider, useSetting };
