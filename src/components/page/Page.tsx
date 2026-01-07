'use client';

import { Header, Main } from '@components/layout';
import { ModeProvider, ThemeProvider } from '@library/providers';
import { HeaderStyles, MainStyles } from '@styles/layout';
import { PageStyles } from '@styles/page';
import { ReactNode } from 'react';

interface Props {
  mainItems?: ReactNode;
}

export default function Page({ mainItems }: Props) {
  return (
    <ModeProvider>
      <ThemeProvider>
        <div className={PageStyles.Page}>
          <Header className={HeaderStyles.Page} />
          <Main className={MainStyles.Page}>{mainItems}</Main>
        </div>
      </ThemeProvider>
    </ModeProvider>
  );
}
