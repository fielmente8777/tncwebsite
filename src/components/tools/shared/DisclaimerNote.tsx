interface DisclaimerNoteProps {
  heading?: string;
  children: React.ReactNode;
}

const DisclaimerNote: React.FC<DisclaimerNoteProps> = ({ heading, children }) => {
  return (
    <aside className="mt-[34px] rounded-r-xl border border-l-4 border-[var(--tnc-line)] border-l-[var(--tnc-red)] bg-white px-[22px] py-[18px]">
      {heading ? (
        <h4 className="mb-2 text-[15px] font-bold text-[var(--tnc-navy)]">{heading}</h4>
      ) : null}
      <div className="space-y-2.5 text-[13px] leading-[1.65] text-[var(--tnc-muted)] [&_a]:text-[var(--tnc-red)] [&_a]:underline [&_strong]:text-[var(--tnc-navy)]">
        {children}
      </div>
    </aside>
  );
};

export default DisclaimerNote;
