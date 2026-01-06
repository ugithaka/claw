'use client';

import { Header, Main } from '@components/layout';
import { ModeProvider } from '@library/providers';
import { HeaderStyles, MainStyles } from '@styles/layout';
import { PageStyles } from '@styles/page';

export default function Page() {
  return (
    <ModeProvider>
      <div className={PageStyles.Page}>
        <Header className={HeaderStyles.Page} />
        <Main className={MainStyles.Page} />
      </div>
    </ModeProvider>
  );
}
