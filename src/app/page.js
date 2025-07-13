import Banner from '@/components/Banner'
import HomeCard from '@/components/HomeCard'
import Gallery from '@/components/Gallery'
import React from 'react'
import UpcomingDeadlines from '@/components/Upcomming'

function page() {
  return (
    <div>
      <Banner></Banner>
      <HomeCard></HomeCard>
      <Gallery></Gallery>
      <UpcomingDeadlines></UpcomingDeadlines>
    </div>
  )
}

export default page