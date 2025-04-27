import { CiShoppingTag } from "react-icons/ci";
import SidebarCard from "../ui/SidebarCard";
import Label from "../ui/Label";

type Category = {
    name: string;
    slug: string;
};

type CategoriesProps = {
    categories: Category[];
};

const Categories = ({ categories }: CategoriesProps) => {
    return (
        <SidebarCard title="التصنيفات المميزة" icon={<CiShoppingTag size={24} />}>
            <ul className="flex flex-wrap gap-2 py-6">
                {categories.map((category, index) => (
                    <Label {...category} key={index} />
                ))}
            </ul>
        </SidebarCard>
    );
};
export default Categories;