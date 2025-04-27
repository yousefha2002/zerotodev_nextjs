import React from 'react'

interface GridProps<T> {
    data: T[]
    renderItem: (item: T) => React.ReactNode
}

export default function Grid<T>({ data, renderItem }: GridProps<T>) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
                <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
            ))}
        </div>
    )
}