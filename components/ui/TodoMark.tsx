/**
 * Visible marker for content the client must still supply. Deliberately loud:
 * nothing provisional should be mistakable for finished copy on a real
 * person's site.
 */
export function TodoMark({ label = 'TODO' }: { label?: string }) {
  return (
    <mark className="inline-block border border-accent bg-ground px-1.5 py-0.5 align-middle font-utility text-[0.65rem] uppercase tracking-widest text-accent">
      {label}
    </mark>
  );
}
