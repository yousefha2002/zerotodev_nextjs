import { CiShoppingTag } from "react-icons/ci";
import SidebarCard from "../ui/sidebar/SidebarCard";
import Label from "../ui/Label";
import { Category } from "@/types/Category";
import Link from "next/link";

type CategoriesProps = {
    categories: Category[];
};

const Categories = ({ categories }: CategoriesProps) => {
    return (
        <SidebarCard title="التصنيفات المميزة" icon={<CiShoppingTag size={24} />}>
            <ul className="flex flex-wrap gap-2 py-6">
                <Link
                href={{
                    pathname: '/articles',
                    }}
                    className="py-1 px-3 rounded-full bg-primary text-white"
                >
                    الكل
                </Link>
                {categories.map((category) => (
                    <Label {...category} key={category.id} />
                ))}
            </ul>
        </SidebarCard>
    );
};
export default Categories;