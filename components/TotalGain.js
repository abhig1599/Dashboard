import { Box, Text } from '@chakra-ui/react';

import BalanceChart from '@/components/BalanceChart'
const StatisticsPage = () => {
  return (
    <Box display="flex" w="100%" p="4">
      <Box w="30%" p="4" bg="white" borderRadius="md" boxShadow="md" className='pl-12'>
        <div className='ml-6'>
        <Text fontWeight="bold" mb="2">Total Gain</Text>
        <Text>Daily Gain:</Text>
        <Text>Monthly Gain:</Text>
        <Text>Drawdown:</Text>
        <Text>Balance:</Text>
        <Text>Equity:</Text>
        <Text>Profit:</Text>
        <Text>Deposits:</Text>
        <Text>Withdrawals:</Text>
        <Text>Last Updated:</Text>
        </div>
      </Box>

      <Box w="70%" p="4" bg="white" borderRadius="md" boxShadow="md" ml="4" className='pl-12'>
        {/* <Text fontWeight="bold" mb="2" className='pl-12'>Overview of your balance</Text> */}
        {/* Chart component here */}
        <Box className='h-56 w-full pl-12'>
          <BalanceChart/>
        </Box>
      </Box>
    </Box>
  );
};

export default StatisticsPage;
