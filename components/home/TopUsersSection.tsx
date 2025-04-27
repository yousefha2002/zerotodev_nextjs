import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import TopUserCard from "./TopUserCard";

type User = {
    id: number;
    name: string;
    image: string;
    points: number;
};

type TopUsersSectionProps = {
    users: User[];
};

const TopUsersSection = ({ users }: TopUsersSectionProps) => {
    return (
        <section className="py-20 bg-gray-100">
            <Container>
                <SectionTitle
                    title="أكثر المستخدمين نشاطًا"
                    subtitle="أفضل 5 مستخدمين حسب النقاط"
                    align="center"
                />

                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {users.map((user) => (
                        <TopUserCard
                            key={user.id}
                            image={user.image}
                            name={user.name}
                            points={user.points}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TopUsersSection;