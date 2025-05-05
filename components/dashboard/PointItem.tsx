import React from "react";
import Shadow from "../ui/Shadow";
import { UserPoint } from "@/types/UserPoint";
import formatDate from "@/utils/formatDate";

export default function PointItem({point}: {point:UserPoint}) {
    return (
        <Shadow className="bg-white py-5 border hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-primary">{point.activity_title}</h3>
                <span className="text-sm text-muted">{formatDate(point.date)}</span>
            </div>
            <p className="text-dark text-base mb-4">
                {point.article?.title || point.question?.title || point.quiz?.title}
            </p>           
            <div className="flex items-center justify-end">
                <span className="bg-accent text-dark font-bold py-1 px-3 rounded-full">
                +{point.points} نقطة
                </span>
            </div>
        </Shadow>
    );
}