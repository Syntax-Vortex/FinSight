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
    monthlyComparisonData: monthlyComparisonData,

    deleteTransaction: (id) =>
        set((state) => {
            const temp = state.transactions.filter((t) => t.id !== id);

            return {
                transactions: temp,
                balanceData: getBalanceData(temp),
                categoryData: getCategoryData(temp),
                monthlyComparisonData: getMonthlyComparisonData(temp),
            };
        }),

    addTransaction: (newTransaction) =>
        set((state) => {
            const updated = [newTransaction, ...state.transactions];

            const balanceData = getBalanceData(updated);
            const categoryData = getCategoryData(updated);
            const monthlyComparisonData = getMonthlyComparisonData(updated);

            return {
                transactions: updated,
                balanceData,
                categoryData,
                monthlyComparisonData,
            };
        }),
}));

export default useDataStore;