import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

const russianTranslations = {
  search: 'Поиск',
  searchNoResult: 'Результатов не найдено',
  toc: 'Содержание',
  tocNoHeadings: 'Заголовки не найдены',
  lastUpdate: 'Последнее обновление',
  chooseLanguage: 'Выбрать язык',
  nextPage: 'Следующая',
  previousPage: 'Предыдущая',
  chooseTheme: 'Выбрать тему',
  editOnGithub: 'Редактировать на GitHub'
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: 'ru',
            translations: russianTranslations,
            locales: [
              { name: 'Русский', locale: 'ru' }
            ]
          }}
          search={{}}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
