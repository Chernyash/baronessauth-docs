# Настройка иконки документации

## Как изменить иконку документации

### 1. Замените файл иконки
Замените файл `public/icons/icon.png` на вашу иконку. Поддерживаются форматы PNG, JPG, SVG.

### 2. Настройте конфигурацию (опционально)
Отредактируйте файл `content/docs/icon-config.json`:

```json
{
  "iconPath": "/icons/icon.png",
  "iconAlt": "BaronessAuth Documentation",
  "iconWidth": 24,
  "iconHeight": 24
}
```

### Параметры конфигурации:
- `iconPath` - путь к файлу иконки (относительно папки public)
- `iconAlt` - альтернативный текст для иконки
- `iconWidth` - ширина иконки в пикселях
- `iconHeight` - высота иконки в пикселях

### Примеры использования:

#### Стандартная иконка:
```json
{
  "iconPath": "/icons/icon.png",
  "iconAlt": "BaronessAuth Documentation",
  "iconWidth": 24,
  "iconHeight": 24
}
```

#### Большая иконка:
```json
{
  "iconPath": "/icons/logo.png",
  "iconAlt": "BaronessAuth Logo",
  "iconWidth": 32,
  "iconHeight": 32
}
```

#### Иконка из другой папки:
```json
{
  "iconPath": "/images/logo.png",
  "iconAlt": "BaronessAuth Documentation",
  "iconWidth": 24,
  "iconHeight": 24
}
```

### Примечания:
- Иконка автоматически обновится при изменении файла или конфигурации
- Если файл конфигурации отсутствует, используются значения по умолчанию
- Поддерживаются все форматы изображений, которые поддерживает Next.js Image компонент 