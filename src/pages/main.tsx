import type { NextPage } from 'next';
import Record from '@/componemts/record';
import HistoryList from '@/componemts/historyList';

const Main: NextPage = () => {
  return(
    <div>
      <Record/>
      <HistoryList/>
    </div>
  )
}
export default Main