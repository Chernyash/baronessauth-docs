import fs from 'fs';
import path from 'path';

export interface IconConfig {
  iconPath: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
}

export function getIconConfig(): IconConfig {
  const configPath = path.join(process.cwd(), 'content/docs/icon-config.json');
  
  try {
    const configContent = fs.readFileSync(configPath, 'utf-8');
    return JSON.parse(configContent);
  } catch (error) {
    // Fallback to default configuration
    return {
      iconPath: '/icons/icon.png',
      iconAlt: 'BaronessAuth Documentation',
      iconWidth: 24,
      iconHeight: 24
    };
  }
}

export function getIconPath(): string {
  const config = getIconConfig();
  return config.iconPath;
}

export function getIconAlt(): string {
  const config = getIconConfig();
  return config.iconAlt;
}

export function getIconDimensions(): { width: number; height: number } {
  const config = getIconConfig();
  return {
    width: config.iconWidth,
    height: config.iconHeight
  };
} 