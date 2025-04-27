type MobileMenuButtonProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenuButton({ isOpen, setIsOpen }: MobileMenuButtonProps) {
    return (
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark">
            {isOpen ? (
                <span className="text-xl">✖️</span>
            ) : (
                <span className="text-xl">☰</span>
            )}
            </button>
        </div>
        );
    }