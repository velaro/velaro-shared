export const tableStyles = {
  half: "half",
  split: "split"
};

export type TableStyle = keyof typeof tableStyles;

export const badgeBgColors = {
  red: "bg-crimson-red-100",
  blue: "bg-cornflower-blue-100",
  green: "bg-success-green-100",
  yellow: "bg-sweet-orange-100",
  purple: "bg-grape-100",
  gray: "bg-slate-100",
  navy: "bg-steel-blue-100"
};

export type BadgeColor = keyof typeof badgeBgColors;

export const badgeTextColors = {
  red: "text-crimson-red-300",
  blue: "text-cornflower-blue-300",
  green: "text-success-green-300",
  yellow: "text-sweet-orange-300",
  purple: "text-grape-300",
  gray: "text-slate-300"
};
