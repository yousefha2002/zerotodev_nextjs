type SectionTitleProps = {
    title: string;
    subtitle: string;
    align?: 'center' | 'start' | 'end';
};

export default function SectionTitle({title,subtitle,align = 'center'}: SectionTitleProps) {
    const alignment = align === 'center' ? 'text-center' : align === 'start' ? 'text-start' : 'text-end';
    return (
        <div className={`mb-10 ${alignment}`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-2">
                <span className="text-primary">|</span> {title}
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">{subtitle}</p>
        </div>
    );
}  