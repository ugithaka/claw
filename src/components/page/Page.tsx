import { Header, Main } from '@components/layout';
import { HeaderStyles, MainStyles } from '@styles/layout';
import { PageStyles } from '@styles/page';

export default function Page() {
  return (
    <div className={PageStyles.Page}>
      <Header className={HeaderStyles.Page} />
      <Main className={MainStyles.Page} />
    </div>
  );
}
