export default function getBalanceData(transactions) {
  if (!transactions.length) return [];

  let balance = 0;

  return [...transactions]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((t) => {
      balance += t.type === "income" ? t.amount : -t.amount;

      return {
        date: t.date,
        balance,
      };
    });
}