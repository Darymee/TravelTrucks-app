export default function Icon({
  name,
  size = 24,
  width,
  height,
  className,
  ...props
}) {
  const w = width ?? size;
  const h = height ?? size;

  return (
    <svg width={w} height={h} className={className} {...props}>
      <use href={`../../assets/sprite.svg#${name}`} />
    </svg>
  );
}
