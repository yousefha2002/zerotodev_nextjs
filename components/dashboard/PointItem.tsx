import React from "react";
import Shadow from "../ui/Shadow";

interface PointItemProps {
    title: string;
    points: number;
    date: string;
    description: string;
}

export default function PointItem({ title, points, date, description }: PointItemProps) {
    return (
        <Shadow className="bg-white py-5 border hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <span className="text-sm text-muted">{date}</span>
            </div>
            <p className="text-dark text-base mb-4">{description}</p>
            <div className="flex items-center justify-end">
                <span className="bg-accent text-dark font-bold py-1 px-3 rounded-full">
                +{points} نقطة
                </span>
            </div>
        </Shadow>
    );
}