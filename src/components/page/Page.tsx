import { Header, Main } from '@components/layout';
import { PageStyles } from '@styles/page';

export default function Page() {
  return (
    <div className={PageStyles.Page}>
      <Header />
      <Main />
    </div>
  );
}
