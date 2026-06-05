interface ISPFounderNoteProps {
  children: React.ReactNode;
  label?: string;
}

const ISPFounderNote = ({ children, label = "ISP Founder Note" }: ISPFounderNoteProps) => (
  <aside className="not-prose my-10 rounded-xl border-l-4 border-primary bg-primary/[0.04] px-6 py-6 md:px-8 md:py-7">
    <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-3">
      {label}
    </div>
    <div className="text-base md:text-[17px] leading-relaxed text-foreground/85">
      {children}
    </div>
  </aside>
);

export default ISPFounderNote;