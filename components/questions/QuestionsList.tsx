import QuestionCard from "./QuestionCard";
import Pagination from "../ui/Pagination";
import { QuestionList } from "@/types/Question";
import GoogleAd from "../GoogleAd";
import React from "react";

type QuestionsListProps = {
    questions: QuestionList[];
    currentPage: number;
    totalPages: number;
};

const QuestionsList = ({ questions, currentPage, totalPages }: QuestionsListProps) => {
    return (
        <>
            <div className="space-y-8">
                {questions.map((question, index) => (
                    <React.Fragment key={question.id + "id"}>
                        <QuestionCard {...question} />

                        {index === 2 && (
                            <GoogleAd slot="1234567897"/>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
};

export default QuestionsList;