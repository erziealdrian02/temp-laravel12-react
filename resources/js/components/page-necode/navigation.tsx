'use client';

import { useLanguage } from '@/components/page-necode/contexts/language-context';
import { LanguageToggle } from '@/components/page-necode/language-toggle';
import { ThemeToggle } from '@/components/page-necode/theme-toggle';
import { Button } from '@/components/page-necode/ui/button';
import { Menu, X } from 'lucide-react';
import * as React from 'react';
const Link: React.FC<
    React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
> = ({ href, children, ...rest }) => (
    <a href={href} {...rest}>
        {children}
    </a>
);

export function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { t } = useLanguage();

    const navigation = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.services'), href: '#services' },
        { name: t('nav.portfolio'), href: '#portfolio' },
        { name: t('nav.team'), href: '#team' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    return (
        <nav className="glass-effect fixed top-0 z-40 w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="#home"
                            className="flex items-center space-x-2"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent">
                                <span className="text-sm font-bold text-primary-foreground">
                                    N
                                </span>
                            </div>
                            <span className="gradient-text text-xl font-bold">
                                Necode
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-accent/10 hover:text-foreground"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden items-center space-x-4 md:flex">
                        <LanguageToggle />
                        <ThemeToggle />
                        <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90">
                            {t('nav.startProject')}
                        </Button>
                    </div>

                    <div className="flex items-center space-x-2 md:hidden">
                        <LanguageToggle />
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="h-9 w-9"
                        >
                            {isOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 border-t border-border px-2 pt-2 pb-3 sm:px-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors duration-200 hover:bg-accent/10 hover:text-foreground"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90">
                                    {t('nav.startProject')}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
