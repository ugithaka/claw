'use client';

import { Header, Main, Nav } from '@components/layout';
import { Modal } from '@components/page';
import { Brand } from '@components/shared';
import { AsideProvider, ModeProvider, ThemeProvider } from '@library/providers';
import { HeaderStyles, MainStyles } from '@styles/layout';
import { PageStyles } from '@styles/page';
import { ReactNode } from 'react';

interface Props {
  mainItems?: ReactNode;
  navItems?: ReactNode;
  modalItems?: ReactNode;
}

export default function Page({ mainItems, navItems, modalItems }: Props) {
  return (
    <ModeProvider>
      <ThemeProvider>
        <AsideProvider>
          {' '}
          <div className={PageStyles.Page}>
            <Header className={HeaderStyles.Page}>
              <Brand />
              <Nav>{navItems}</Nav>
              <Modal>{modalItems}</Modal>
            </Header>
            <Main className={MainStyles.Page}>{mainItems}</Main>
          </div>
        </AsideProvider>
      </ThemeProvider>
    </ModeProvider>
  );
}
