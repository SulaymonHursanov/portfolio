import { GlassmorphismPortfolioBlock } from "@/components/ui/glassmorphism-portfolio-block";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero / About */}
      <GlassmorphismPortfolioBlock />

      {/* Skills with GlowingEffect */}
      <SkillsSection />

      {/* Experience with MovingBorder */}
      <ExperienceSection />

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Хурсанов Сулаймон · Senior Java Developer · Москва
        </p>
      </footer>
    </main>
  );
}
