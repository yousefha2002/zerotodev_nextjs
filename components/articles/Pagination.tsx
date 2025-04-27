type PaginationProps = {
    currentPage: number;
    totalPages: number;
};

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
    return (
        <div className="flex justify-center items-center gap-x-2 mt-8">
            <button
                disabled={currentPage === 1}
                className="bg-primary text-white px-6 py-2 rounded-lg disabled:opacity-50 transition duration-300 hover:bg-primary-dark focus:outline-none"
            >
                السابق
            </button>

            <span className="text-lg font-semibold text-dark">
                {`${currentPage} / ${totalPages}`}
            </span>

            <button
                disabled={currentPage === totalPages}
                className="bg-primary text-white px-6 py-2 rounded-lg disabled:opacity-50 transition duration-300 hover:bg-primary-dark focus:outline-none"
            >
                التالي
            </button>
        </div>
    );
};

export default Pagination;