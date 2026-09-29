import { type FC } from "react";
import { Layers, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SectionTitle,
  SectionWrapper,
  Badge,
} from "@/components/ui";

const FEATURES = [
  {
    icon: Layers,
    title: "Feature-First Architecture",
    description: "Self-contained modules with isolated state, hooks, services, and types for enterprise-scale growth.",
    badge: "Architecture",
  },
  {
    icon: Zap,
    title: "Tailwind CSS v4 & Tokens",
    description: "Configured with Poppins (120% line-height) and Satoshi (160% line-height) paired with Electric Lime & Persian Blue.",
    badge: "Design System",
  },
  {
    icon: ShieldCheck,
    title: "TanStack Query + Zustand",
    description: "Separation of concerns between cached server state and reactive client UI stores.",
    badge: "State Management",
  },
];

export const FeaturesSection: FC = () => {
  return (
    <SectionWrapper id="services" padding="xl" background="muted">
      <SectionTitle
        label="Best Practices"
        title="Engineering Standards"
        subtitle="Every component, hook, and layout is built with strict line limits, zero bloat, and maximum readability."
        align="center"
        className="mb-14"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} hover bordered className="flex flex-col justify-between">
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <Icon className="size-6" />
                    </div>
                    <Badge variant="muted" size="sm">
                      {item.badge}
                    </Badge>
                  </div>
                  <h3 className="font-title text-heading-xs font-bold text-foreground">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardBody>{item.description}</CardBody>
              </div>

              <CardFooter className="justify-between">
                <span className="text-label-xs font-semibold text-secondary uppercase tracking-wider">
                  Verified Standard
                </span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
