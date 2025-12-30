'use client';

import { getTranslation } from '@/components/page-necode/lib/translations';
import * as React from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
    undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = React.useState<Language>('id');

    React.useEffect(() => {
        // Load language from localStorage
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string) => {
        return getTranslation(language, key);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = React.useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
