// import { AboutSection } from '@/components/page/about-section';
// import { ContactSection } from '@/components/page/contact-section';
// import { Footer } from '@/components/page/footer';
// import { HeroSection } from '@/components/page/hero-section';
import { Navigation } from '@/components/page-necode/navigation';
// import PortfolioSectionTimeline from '@/components/page/portfolio-section-timeline';
// import { ServicesSection } from '@/components/page/services-section';
// import { TeamSection } from '@/components/page/team-section';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            {/* <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSectionTimeline />
            <TeamSection />
            <ContactSection />
            <Footer /> */}
        </div>
    );
}
