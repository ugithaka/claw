'use client';

import { Header, Main } from '@components/layout';
import { Icon } from '@components/shared';
import { useAside, useTrigger } from '@library/hooks';
import { HeaderStyles, MainStyles } from '@styles/layout';
import { ModalStyles, PageStyles } from '@styles/page';
import { ReactNode, useEffect } from 'react';

interface Props {
  children?: ReactNode;
}

export default function Modal({ children }: Props) {
  const { trigger, pullTrigger } = useTrigger();

  const { setHidden } = useAside();

  useEffect(() => {
    setHidden(trigger);
    return () => setHidden(false);
  }, [trigger, setHidden]);

  return (
    <div className={ModalStyles.Modal}>
      <div
        className={ModalStyles.TriggerOff}
        onClick={() => pullTrigger()}
      >
        <Icon
          name='modal'
          alt='Modal Icon'
          size={16}
          inverted
        />
      </div>
      {trigger && (
        <div className={ModalStyles.ModalItself}>
          <div className={PageStyles.Page}>
            <Header className={HeaderStyles.Page}>
              <div className={ModalStyles.Nav}></div>
              <div
                className={ModalStyles.TriggerOn}
                onClick={() => pullTrigger()}
              >
                <Icon
                  name='modal'
                  alt='Modal Icon'
                  size={16}
                />
              </div>
            </Header>
            <Main className={MainStyles.Page}>{children}</Main>
          </div>
        </div>
      )}
    </div>
  );
}
