import React from "react";
import Grid from "../ui/Grid";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";

type ContentSectionProps<T> = {
  title: string;
  subtitle: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
};

function ContentSection<T>({title,subtitle,data,renderItem}: ContentSectionProps<T>) {
  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <SectionTitle title={title} subtitle={subtitle} align="center" />
        <Grid
          data={data.slice(0, 3)}
          renderItem={renderItem}
        />
      </Container>
    </section>
  );
}

export default ContentSection;