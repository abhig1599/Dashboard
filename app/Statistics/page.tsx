// import BalanceChart from '@/components/BalanceChart'
import Navbar from '@/components/Navbar'
import MonthlyReturns from '@/components/MonthlyReturns'
import LotsTradedChart from '@/components/LotsTraded'
import HistoryTable from '@/components/HistoryTable'
import TotalGain from '@/components/TotalGain'
import StartOverview from '@/components/StatsOverview'
import { Box} from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 ml-[270px] gap-8">
      <Navbar name="Statistics"/>
      <StartOverview/>
      <Box className=''>
          <TotalGain/>
      </Box>
      <Box>
      <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Monthly Returns</h3>
            {/* Bar Chart */}
            <MonthlyReturns />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Lots Traded per Instrument</h3>
            <LotsTradedChart />
          </div>
        </div>
      </Box>
      <Box>
        <HistoryTable/>
      </Box>
    </div>
  )
}

export default page
