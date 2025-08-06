import Image from 'next/image';
import { getIconConfig } from '@/lib/icon-config';

export function DocIcon() {
  const config = getIconConfig();
  
  return (
    <Image
      src={config.iconPath}
      alt={config.iconAlt}
      width={config.iconWidth}
      height={config.iconHeight}
      className="inline-block rounded-xl"
    />
  );
} 