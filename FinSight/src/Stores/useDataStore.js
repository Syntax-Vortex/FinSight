import { create } from 'zustand';
import Data from '../Data/transactions.json';
import getBalanceData from '../Utils/getBalanceData';
import getCategoryData from '../Utils/getCategoryData';
import getMonthlyComparisonData from '../Utils/getMonthlyComparisonData';

const transactions = Data.transactions;
const balanceData = getBalanceData(transactions);
const categoryData = getCategoryData(transactions);
const monthlyComparisonData = getMonthlyComparisonData(transactions);

const useDataStore = create((set) => ({
    transactions: transactions,
    balanceData: balanceData,
    categoryData: categoryData,
    monthlyComparisonData: monthlyComparisonData
}));

export default useDataStore;