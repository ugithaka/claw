'use client';

import { Header, Main } from '@components/layout';
import { ModeProvider, ThemeProvider } from '@library/providers';
import { HeaderStyles, MainStyles } from '@styles/layout';
import { PageStyles } from '@styles/page';

export default function Page() {
  return (
    <ModeProvider>
      <ThemeProvider>
        <div className={PageStyles.Page}>
          <Header className={HeaderStyles.Page} />
          <Main className={MainStyles.Page} />
        </div>
      </ThemeProvider>
    </ModeProvider>
  );
}
