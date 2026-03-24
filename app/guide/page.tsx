import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { guideSections } from "@/data/guide";
import {
  CloudRain,
  Train,
  Wallet,
  Home,
  Languages,
  HandCoins,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CloudRain,
  Train,
  Wallet,
  Home,
  Languages,
  HandCoins,
};

export default function GuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-light tracking-tight mb-2">Travel Guide</h1>
        <p className="text-sm text-muted-foreground">
          Everything you need to know for Bergen
        </p>
      </div>

      <Accordion defaultValue={[0, 1, 3]} className="space-y-2">
        {guideSections.map((section) => {
          const Icon = iconMap[section.icon];
          return (
            <AccordionItem
              key={section.id}
              className="border border-border rounded-xl px-5 data-[state=open]:bg-card transition-colors"
            >
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <span className="flex items-center gap-3">
                  {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
                  {section.title}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {section.content.map((line, i) => (
                    <li key={i} className="leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
