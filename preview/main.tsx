import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ImageFilter from "../src/components/ImageFilter";
import { adjustmentConfigs, FilterName, filters } from "../src/utils/filters";

const App = () => {
  const [filter, setFilter] = useState<FilterName>("None");
  const [adjustments, setAdjustments] = useState({
    brightness: 100,
    contrast: 100,
    hue: 0,
    sepia: 0,
    saturation: 100,
    vignette: 0,
  });

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>React Image Effect Filter Preview</h1>
      <ImageFilter
        src="https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VyZW5pdHl8ZW58MHx8MHx8fDA%3D"
        filter={filter}
        adjustments={adjustments}
        style={{ marginBottom: "20px" }}
      />
      <div>
        <h3>Filters</h3>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as FilterName)}
        >
          {filters.map((f) => (
            <option key={f.name} value={f.name}>
              {f.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3>Adjustments</h3>
        {adjustmentConfigs.map((config) => (
          <div key={config.key} style={{ marginBottom: "10px" }}>
            <label>{config.label}: </label>
            <input
              type="range"
              min={config.min}
              max={config.max}
              value={adjustments[config.key as keyof typeof adjustments]}
              onChange={(e) =>
                setAdjustments((prev) => ({
                  ...prev,
                  [config.key]: Number(e.target.value),
                }))
              }
            />
            <span>{adjustments[config.key as keyof typeof adjustments]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
