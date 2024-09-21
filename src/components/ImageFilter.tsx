import React, {
  ImgHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from "react";
import { filters, FilterName } from "../utils/filters";

export interface EffectsProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  filter?: FilterName;
  adjustments?: {
    brightness?: number;
    contrast?: number;
    hue?: number;
    sepia?: number;
    saturation?: number;
    vignette?: number;
  };
  onFilterChange?: (filter: string) => void;
  onAdjustmentChange?: (adjustment: string, value: number) => void;
}

const ImageFilter: React.FC<EffectsProps> = ({
  src,
  alt = "",
  filter = "none",
  adjustments = {},
  onFilterChange,
  onAdjustmentChange,
  style,
  ...props
}) => {
  const [selectedFilter, setSelectedFilter] = useState(filter);
  const [imageAdjustments, setImageAdjustments] = useState(adjustments);

  useEffect(() => {
    if (filter !== selectedFilter) {
      setSelectedFilter(filter);
      onFilterChange && onFilterChange(filter);
    }
  }, [filter, selectedFilter]);

  useEffect(() => {
    if (JSON.stringify(adjustments) !== JSON.stringify(imageAdjustments)) {
      setImageAdjustments(adjustments);
    }
  }, [adjustments, imageAdjustments]);

  const getFilterStyle = useCallback(() => {
    const selectedFilterDetail = filters?.find(
      (filter) => filter.name === selectedFilter
    );
    return selectedFilterDetail ? selectedFilterDetail.code : "";
  }, [selectedFilter]);

  const getAdjustmentStyles = useCallback(() => {
    const {
      brightness = 100,
      contrast = 100,
      hue = 0,
      sepia = 0,
      saturation = 100,
    } = imageAdjustments;
    return `brightness(${brightness}%) contrast(${contrast}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturation}%)`;
  }, [imageAdjustments]);

  const getVignetteStyle = useCallback(() => {
    const { vignette = 0 } = imageAdjustments;
    return `radial-gradient(circle, transparent ${
      100 - vignette
    }%, rgba(0,0,0,${vignette / 100}) 100%)`;
  }, [imageAdjustments]);

  const handleFilterChange = (newFilter: string) => {
    setSelectedFilter(newFilter);
    onFilterChange && onFilterChange(newFilter);
  };

  const handleAdjustmentChange = (adjustment: string, value: number) => {
    setImageAdjustments((prev) => ({ ...prev, [adjustment]: value }));
    onAdjustmentChange && onAdjustmentChange(adjustment, value);
  };

  return (
    <div
      style={{
        position: "relative",
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "contain",
          filter: `${getFilterStyle()} ${getAdjustmentStyles()}`,
        }}
        {...props}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: getVignetteStyle(),
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default ImageFilter;
