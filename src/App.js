import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import Chart from './components/Chart';


import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className='container'>
      <Balance/>
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      <Chart />
    </div>
    </GlobalProvider>
  );
}

export default App;
