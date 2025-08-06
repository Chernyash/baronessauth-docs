import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { baseOptions } from '@/app/layout.config';

export default async function PasswordsPage() {
  // Получаем страницу passwords
  const page = source.getPage(['passwords']);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDXContent
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}

export async function generateMetadata() {
  const page = source.getPage(['passwords']);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
} 