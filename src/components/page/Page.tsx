'use client';

import { Header, Main, Nav } from '@components/layout';
import { Brand } from '@components/shared';
import { ModeProvider, ThemeProvider } from '@library/providers';
import { HeaderStyles, MainStyles } from '@styles/layout';
import { PageStyles } from '@styles/page';
import { ReactNode } from 'react';

interface Props {
  mainItems?: ReactNode;
  navItems?: ReactNode;
}

export default function Page({ mainItems, navItems }: Props) {
  return (
    <ModeProvider>
      <ThemeProvider>
        <div className={PageStyles.Page}>
          <Header className={HeaderStyles.Page}>
            <Brand />
            <Nav>{navItems}</Nav>
          </Header>
          <Main className={MainStyles.Page}>{mainItems}</Main>
        </div>
      </ThemeProvider>
    </ModeProvider>
  );
}
