'use client';

import { Brand, Icon } from '@components/shared';
import { useAside } from '@library/hooks';
import { AsideStyles } from '@styles/layout';

export default function Aside() {
  const { pullTrigger } = useAside();

  return (
    <aside className={AsideStyles.Aside}>
      <div className={AsideStyles.Container}>
        <div className={AsideStyles.Head}>
          <Brand />
          <div
            className={AsideStyles.Nav}
            onClick={pullTrigger}
          >
            <Icon
              name='aside'
              alt='Aside Icon'
              size={16}
            />
          </div>
        </div>
        <div className={AsideStyles.Body}></div>
      </div>
      <div className={AsideStyles.Cover}></div>
    </aside>
  );
}
