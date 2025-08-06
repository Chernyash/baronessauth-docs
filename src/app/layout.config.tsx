import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { DocIcon } from '@/components/DocIcon';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <DocIcon />
        BaronessAuth
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
