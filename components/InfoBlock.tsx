import React from 'react'

export default function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="bg-white shadow rounded-xl p-6 space-y-4 border-l-4 border-primary">
            <h2 className="text-2xl font-semibold text-primary">{title}</h2>
            {children}
        </section>
    )
}
