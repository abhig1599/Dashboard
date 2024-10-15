import BalanceChart from '@/components/BalanceChart'
import Navbar from '@/components/Navbar'
import StartOverview from '@/components/StatsOverview'
import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 ml-[270px] gap-8">
      <Navbar name="Statistics"/>
      <StartOverview/>
      <Box>
        <BalanceChart />
        <SimpleGrid/>
      </Box>
    </div>
  )
}

export default page
