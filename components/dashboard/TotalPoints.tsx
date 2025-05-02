interface TotalPointsProps {
    totalPoints: number;
}

export default function TotalPoints({totalPoints}:TotalPointsProps)
{
    return(
        <div className="mt-8 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">إجمالي النقاط: {totalPoints}</h2>
        </div>
    )
};