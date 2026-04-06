import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useDataStore from "../../Stores/useDataStore";

export default function AddTransactionModal({ open, setOpen }) {
    const { addTransaction } = useDataStore();

    const [formData, setFormData] = useState({
        name: "",
        amount: "",
        type: "expense",
        category: "Food",
        date: "",
        description: "",
    });

    useEffect(() => {
        if (!open) return;
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "auto");
    }, [open]);

    if (!open) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.amount || !formData.date) return;

        addTransaction({
            id: Date.now(),
            name: formData.name.trim(),
            amount: Number(formData.amount),
            type: formData.type,
            category: formData.category,
            date: formData.date,
            description: formData.description.trim(),
        });

        setFormData({
            name: "",
            amount: "",
            type: "expense",
            category: "Food",
            date: "",
            description: "",
        });

        setOpen(false);
    };

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 px-2 md:px-4"
            onClick={() => setOpen(false)}>
            <div
                className="w-full max-w-2xl bg-white rounded-t-2xl md:rounded-2xl shadow-xl p-4 md:p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                        Add Transaction
                    </h2>

                    <button
                        onClick={() => setOpen(false)}className="text-gray-500 hover:text-gray-800">
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Transaction name"
                        className="border rounded-lg p-2 outline-none"/>

                    <input
                        name="amount"
                        type="number"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Amount"
                        className="border rounded-lg p-2 outline-none"/>

                    <div className="flex gap-2">
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="flex-1 border rounded-lg p-2">
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="flex-1 border rounded-lg p-2">
                            <option>Food</option>
                            <option>Salary</option>
                            <option>Freelance</option>
                            <option>Shopping</option>
                            <option>Travel</option>
                            <option>Bills</option>
                            <option>Entertainment</option>
                            <option>Health</option>
                        </select>
                    </div>

                    <input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border rounded-lg p-2"/>

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description (optional)"
                        className="border rounded-lg p-2 resize-none"/>

                    <button
                        type="submit"
                        className="bg-violet-500 text-white rounded-lg p-2 hover:bg-violet-600">
                        Add Transaction
                    </button>
                </form>
            </div>
        </div>,
        document.getElementById("portal")
    );
}