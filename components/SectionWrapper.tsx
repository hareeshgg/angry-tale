interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`w-full py-12 ${className}`}>
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
