import { type FC } from "react";
import { Layers, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SectionTitle,
  SectionDescription,
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
      <div className="mb-14 flex flex-col items-center text-center gap-3">
        <span className="inline-block rounded-full bg-primary/20 px-3.5 py-1 text-label-xs font-bold uppercase tracking-wider text-foreground">
          Best Practices
        </span>
        <SectionTitle align="center">
          Engineering Standards
        </SectionTitle>
        <SectionDescription align="center" maxWidth="max-w-2xl">
          Every component, hook, and layout is built with strict line limits, zero bloat, and maximum readability.
        </SectionDescription>
      </div>

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
