# ngx-easypiechart
ng 6 module for easypiechart

# Usage

## package.json

Add the following to ``package.json`` file.

```json
    "easy-pie-chart": "~2.1.7",
    "ngx-easypiechart": "0.1.1"
```

## app.module.ts

Add the following to ``app.module.ts`` file.

```typescript
import { NgxEasypiechartModule } from 'ngx-easypiechart';
..
..
imports: [
  ...,
  NgxEasypiechartModule,
  ...
]
```

## macro

```html
<ngx-easypiechart [options]="options" [percent]="percent">
</ngx-easypiechart>
```

```typescript
  constructor() {
    this.percent = 80;
    this.options = {
      size: 50,
      rotate: 0
    };
    ...
  }
```
# Development

## Prepare dist version

```bash
ng build ngx-easypiechart --prod
```

#### aliter:

```bash
npm run build
```
