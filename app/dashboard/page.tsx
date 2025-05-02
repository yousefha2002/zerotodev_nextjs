import Actions from '@/components/dashboard/Actions'
import StatsList from '@/components/dashboard/StatsList'
import UserCard from '@/components/dashboard/UserCard'
import Container from '@/components/ui/Container'
import React from 'react'

export default function page() {
    return (
        <Container className='py-10'>
            <Actions/>
            <StatsList/>
            <UserCard/>
        </Container>
    )
}
