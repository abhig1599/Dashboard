"use client"
import { Box, Stat, StatLabel, StatNumber, Button } from '@chakra-ui/react';

const StatsOverview = () => {
  return (
    <div>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={4} className='' >
              <div className='flex flex-col w-full p-6 gap-4'>
              <div className='flex justify-around'>
            <Stat>
              <StatLabel fontWeight="bold">Account Number</StatLabel>
              <StatNumber>305846</StatNumber>
            </Stat>
            <Stat>
              <StatLabel fontWeight="bold">Active Since</StatLabel>
              <StatNumber>02.01.2024</StatNumber>
            </Stat>
            <Stat>
              <StatLabel fontWeight="bold">Return</StatLabel>
              <StatNumber>113.75%</StatNumber>
            </Stat>
            <Stat>
              <StatLabel fontWeight="bold">Return</StatLabel>
              <StatNumber>113.75%</StatNumber>
            </Stat>
            
            
              </div>
              <div className='flex justify-around'>
            <Stat>
              <StatLabel fontWeight="bold">Avg. Trades per week</StatLabel>
              <StatNumber>9</StatNumber>
            </Stat>
            <Stat>
              <StatLabel fontWeight="bold">Consecutive Wins</StatLabel>
              <StatNumber>14</StatNumber>
            </Stat>
            <Stat>
              <StatLabel fontWeight="bold">Consecutive Losses</StatLabel>
              <StatNumber>12</StatNumber>
            </Stat>
            <Stat>
              <StatLabel fontWeight="bold">Consecutive Losses</StatLabel>
              <StatNumber>12</StatNumber>
            </Stat>
            
              </div>
              </div>
              <Button mt="5"  className='bg-purple-500 p-6 text-white rounded-lg mr-6'>Connect to Provider</Button>
            </Box>
      
    </div>
  );
};

export default StatsOverview;
