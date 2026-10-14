export function GridBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="grid-blueprint absolute inset-0" />
      <div className="scanlines absolute inset-0 opacity-40" />
    </div>
  );
}
