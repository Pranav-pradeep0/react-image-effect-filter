# react-image-effect-filter

A React component for applying filter effects and adjustments to images.

## Installation

```bash
npm install react-image-effect-filter
```

or

```bash
yarn add react-image-effect-filter
```

## Usage

Here's a basic example of how to use the `ImageFilter` component:

```jsx
import React, { useState } from "react";
import { ImageFilter } from "react-image-effect-filter";

const App = () => {
  const [filter, setFilter] = useState("none");
  const [adjustments, setAdjustments] = useState({
    brightness: 100,
    contrast: 100,
    hue: 0,
    sepia: 0,
    saturation: 100,
    vignette: 0,
  });

  return (
    <div>
      <ImageFilter
        src="path/to/your/image.jpg"
        filter={filter}
        adjustments={adjustments}
      />
      {/* Add controls for filter and adjustments here */}
    </div>
  );
};

export default App;
```

## API

### `ImageFilter` Component

The main component of this package.

#### Props

| Prop                 | Type       | Default    | Description                                  |
| -------------------- | ---------- | ---------- | -------------------------------------------- |
| `src`                | string     | (required) | The source URL of the image                  |
| `filter`             | FilterName | 'none'     | The name of the filter to apply              |
| `adjustments`        | object     | {}         | An object containing adjustment values       |
| `onFilterChange`     | function   | undefined  | Callback function when filter changes        |
| `onAdjustmentChange` | function   | undefined  | Callback function when an adjustment changes |

All other props are passed through to the underlying `<img>` element.

#### Adjustments Object

The `adjustments` prop accepts an object with the following properties:

- `brightness`: number (default: 100)
- `contrast`: number (default: 100)
- `hue`: number (default: 0)
- `sepia`: number (default: 0)
- `saturation`: number (default: 100)
- `vignette`: number (default: 0)

### Filters

Available filters can be imported from the package:

```jsx
import { filters, FilterName } from "react-image-effect-filter";
```

The `filters` array contains objects with `name` and `code` properties for each available filter.

### Adjustment Configs

Adjustment configurations can be imported from the package:

```jsx
import { adjustmentConfigs } from "react-image-effect-filter";
```

The `adjustmentConfigs` array contains objects with configuration details for each adjustment.

## Examples

### Applying a Filter

```jsx
import React from "react";
import { ImageFilter } from "react-image-effect-filter";

const FilteredImage = () => (
  <ImageFilter src="path/to/your/image.jpg" filter="sepia" />
);
```

### Applying Adjustments

```jsx
import React from "react";
import { ImageFilter } from "react-image-effect-filter";

const AdjustedImage = () => (
  <ImageFilter
    src="path/to/your/image.jpg"
    adjustments={{
      brightness: 110,
      contrast: 120,
      saturation: 130,
    }}
  />
);
```

### Using Filter and Adjustment Controls

```jsx
import React, { useState } from "react";
import {
  ImageFilter,
  filters,
  adjustmentConfigs,
} from "react-image-effect-filter";

const ImageEditor = () => {
  const [filter, setFilter] = useState("none");
  const [adjustments, setAdjustments] = useState({
    brightness: 100,
    contrast: 100,
    hue: 0,
    sepia: 0,
    saturation: 100,
    vignette: 0,
  });

  return (
    <div>
      <ImageFilter
        src="path/to/your/image.jpg"
        filter={filter}
        adjustments={adjustments}
      />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {filters.map((f) => (
          <option key={f.name} value={f.name}>
            {f.name}
          </option>
        ))}
      </select>
      {adjustmentConfigs.map((config) => (
        <div key={config.key}>
          <label>{config.label}: </label>
          <input
            type="range"
            min={config.min}
            max={config.max}
            value={adjustments[config.key]}
            onChange={(e) =>
              setAdjustments((prev) => ({
                ...prev,
                [config.key]: Number(e.target.value),
              }))
            }
          />
        </div>
      ))}
    </div>
  );
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
