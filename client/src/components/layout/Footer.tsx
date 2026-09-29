import { type FC } from "react";
import { AppLink } from "@/components/ui";
import { APP_CONFIG, NAV_LINKS, ROUTES } from "@/constants";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-light text-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border/80">
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-title font-black text-lg">
                A
              </div>
              <span className="font-title text-xl font-bold tracking-tight">
                ASSESSMENT<span className="text-secondary font-black">.</span>
              </span>
            </div>
            <p className="text-body-m text-muted-foreground max-w-sm">
              {APP_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <span className="text-label-s font-semibold uppercase tracking-wider text-shuttle-400">
              Navigation
            </span>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <AppLink
                  key={link.href}
                  href={link.href}
                  variant="nav"
                  className="text-body-s hover:text-secondary"
                >
                  {link.label}
                </AppLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-label-s font-semibold uppercase tracking-wider text-shuttle-400">
              Direct Contact
            </span>
            <p className="text-body-s text-muted-foreground">
              {APP_CONFIG.contactEmail}
            </p>
            <div className="pt-2">
              <AppLink
                href={ROUTES.CONTACT}
                variant="underline"
                className="text-body-s font-semibold text-secondary"
              >
                Schedule a consultation &rarr;
              </AppLink>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-body-xs text-muted-foreground">
          <p>&copy; {currentYear} {APP_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <AppLink href="#" variant="nav" className="text-body-xs">Privacy Policy</AppLink>
            <AppLink href="#" variant="nav" className="text-body-xs">Terms of Service</AppLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
