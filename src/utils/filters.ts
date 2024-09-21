export const filters = [
  {
    name: "None",
    code: "",
    ffmpegCode: "",
  },
  {
    name: "1977",
    code: "contrast(1.1) brightness(1.1) saturate(1.1)",
    ffmpegCode:
      "eq=contrast=1.1:brightness=1.1,colorbalance=rs=0.1:gs=0.1:bs=0.1",
  },
  {
    name: "aden",
    code: "contrast(0.9) brightness(1.2) hue-rotate(-20deg) saturate(0.85)",
    ffmpegCode: "eq=contrast=0.9:brightness=1.2,hue=h=-20:s=0.85",
  },
  {
    name: "amaro",
    code: "contrast(0.9) brightness(1.1) hue-rotate(-10deg) saturate(1.5)",
    ffmpegCode: "eq=contrast=0.9:brightness=1.1,hue=h=-10:s=1.5",
  },
  {
    name: "brannan",
    code: "contrast(1.4) sepia(0.5)",
    ffmpegCode:
      "eq=contrast=1.4,colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131:0:0:0:0:1",
  },
  {
    name: "clarendon",
    code: "contrast(1.2) saturate(1.35)",
    ffmpegCode: "eq=contrast=1.2:saturation=1.35",
  },
  {
    name: "earlyBird",
    code: "contrast(0.9) sepia(0.2)",
    ffmpegCode:
      "eq=contrast=0.9,colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131:0:0:0:0:1,curves=r='0/0 1/0.9':g='0/0 1/0.9':b='0/0 1/0.9'",
  },
  {
    name: "gingham",
    code: "brightness(1.05) hue-rotate(-10deg)",
    ffmpegCode: "eq=brightness=1.05,hue=h=-10",
  },
  {
    name: "hudson",
    code: "contrast(0.9) brightness(1.2) saturate(1.1)",
    ffmpegCode: "eq=contrast=0.9:brightness=1.2:saturation=1.1",
  },
  {
    name: "inkwell",
    code: "sepia(0.3) contrast(1.1) brightness(1.1) grayscale(1)",
    ffmpegCode:
      "colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131:0:0:0:0:1,eq=contrast=1.1:brightness=1.1,hue=s=0",
  },
  {
    name: "lark",
    code: "contrast(0.9)",
    ffmpegCode: "eq=contrast=0.9",
  },
  {
    name: "lofi",
    code: "contrast(1.5) saturate(1.1)",
    ffmpegCode: "eq=contrast=1.5:saturation=1.1",
  },
  {
    name: "maven",
    code: "contrast(0.95) brightness(0.95) saturate(1.5) sepia(0.25)",
    ffmpegCode:
      "eq=contrast=0.95:brightness=0.95:saturation=1.5,colorchannelmixer=.343:.669:.189:0:.299:.586:.168:0:.272:.534:.131:0:0:0:0:1",
  },
  {
    name: "mayfair",
    code: "contrast(1.1) saturate(1.1)",
    ffmpegCode: "eq=contrast=1.1:saturation=1.1",
  },
  {
    name: "moon",
    code: "contrast(1.1) brightness(1.1) grayscale(1)",
    ffmpegCode: "eq=contrast=1.1:brightness=1.1,hue=s=0",
  },
  {
    name: "reyes",
    code: "contrast(0.85) brightness(1.1) saturate(0.75) sepia(0.22)",
    ffmpegCode:
      "eq=contrast=0.85:brightness=1.1:saturation=0.75,colorchannelmixer=.323:.669:.189:0:.299:.586:.168:0:.272:.534:.131:0:0:0:0:1",
  },
  {
    name: "rise",
    code: "contrast(0.9) brightness(1.05) saturate(0.9) sepia(0.2)",
    ffmpegCode:
      "eq=contrast=0.9:brightness=1.05:saturation=0.9,colorchannelmixer=.323:.669:.189:0:.299:.586:.168:0:.272:.534:.131:0:0:0:0:1",
  },
  {
    name: "slumber",
    code: "saturate(0.66) brightness(1.05)",
    ffmpegCode: "eq=saturation=0.66:brightness=1.05",
  },
  {
    name: "stinson",
    code: "contrast(0.75) brightness(1.15) saturate(0.85)",
    ffmpegCode: "eq=contrast=0.75:brightness=1.15:saturation=0.85",
  },
  {
    name: "toaster",
    code: "contrast(1.5) brightness(0.9)",
    ffmpegCode: "eq=contrast=1.5:brightness=0.9",
  },
  {
    name: "valencia",
    code: "contrast(1.08) brightness(1.08) sepia(0.08)",
    ffmpegCode:
      "eq=contrast=1.08:brightness=1.08,colorchannelmixer=.313:.669:.189:0:.299:.586:.168:0:.272:.534:.131:0:0:0:0:1",
  },
  {
    name: "walden",
    code: "brightness(1.1) hue-rotate(-10deg) sepia(0.3) saturate(1.6)",
    ffmpegCode:
      "eq=brightness=1.1:saturation=1.6,hue=h=-10,colorchannelmixer=.343:.669:.189:0:.299:.586:.168:0:.272:.534:.131:0:0:0:0:1",
  },
  {
    name: "willow",
    code: "contrast(0.95) brightness(0.9) grayscale(0.5)",
    ffmpegCode: "eq=contrast=0.95:brightness=0.9,hue=s=0.5",
  },
  {
    name: "xpro",
    code: "sepia(0.3)",
    ffmpegCode:
      "colorchannelmixer=.343:.669:.189:0:.299:.586:.168:0:.272:.534:.131:0:0:0:0:1",
  },
];

export type FilterName = (typeof filters)[number]["name"];

export const adjustmentConfigs = [
  {
    label: "Brightness",
    key: "brightness",
    min: 0,
    max: 200,
  },
  {
    label: "Contrast",
    key: "contrast",
    min: 0,
    max: 200,
  },
  {
    label: "Hue",
    key: "hue",
    min: -180,
    max: 180,
  },
  {
    label: "Sepia",
    key: "sepia",
    min: 0,
    max: 100,
  },
  {
    label: "Vignette",
    key: "vignette",
    min: 0,
    max: 100,
  },
  {
    label: "Saturation",
    key: "saturation",
    min: 0,
    max: 200,
  },
];

// export const aspectRatios = [
//   { value: 0, label: "Free" },
//   { value: 1 / 1, label: "1:1" },
//   { value: 3 / 4, label: "3:4" },
//   { value: 4 / 3, label: "4:3" },
//   { value: 16 / 9, label: "16:9" },
//   { value: 9 / 16, label: "9:16" },
// ];
