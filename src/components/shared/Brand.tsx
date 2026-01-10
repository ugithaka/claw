import { Icon } from '@components/shared';
import { BrandStyles } from '@styles/shared';

export default function Brand() {
  return (
    <div className={BrandStyles.Brand}>
      <Icon
        name='logo'
        alt='The Claw Logo'
        size={32}
      />
      <p>Claw</p>
    </div>
  );
}
