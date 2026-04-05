import { create } from 'zustand';
import Data from '../Data/transactions.json';
import getBalanceData from '../Utils/getBalanceData';
import getCategoryData from '../Utils/getCategoryData';

const transactions = Data.transactions;
const balanceData = getBalanceData(transactions);
const categoryData = getCategoryData(transactions);

const useDataStore = create((set) => ({
    transactions: transactions,
    balanceData: balanceData,
    categoryData: categoryData
}));

export default useDataStore;