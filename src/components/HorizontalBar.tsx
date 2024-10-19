interface HorizontalBarProps {
  color: string;
}

export default function HorizontalBar({ color }: HorizontalBarProps) {
  return <hr className={`h-[1px] text-${color}`} />;
}
