# ngx-easypiechart
ng 6 module for easypiechart

# Usage

## app.module.ts

Add the following to ``app.module.ts`` file.

```typescript
import { NgxEasypiechartModule } from 'ngx-easy-pie-chart';
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
<ngx-easypiechart>
</ngx-easypiechart>
```

# Development

## Prepare dist version

```bash
ng build ngx-easy-pie-chart --prod
```