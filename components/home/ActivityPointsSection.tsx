import activities from "@/data/activities";
import ActivityCard from "./ActivityCard";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function ActivityPointsSection() {
    return (
        <section className="py-10 bg-gray-50">
            <Container className="text-center px-4">
                <SectionTitle
                    title="النشاطات والنقاط"
                    subtitle="اكسب نقاطًا من خلال تفاعلك في المنصة 👇"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {
                    activities.map((activity, index) => (<ActivityCard key={index} {...activity}/>))
                }
                </div>
            </Container>
        </section>
    );
}