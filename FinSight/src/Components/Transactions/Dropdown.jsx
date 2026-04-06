import { useEffect, useRef } from "react";

export default function Dropdown(props) {
    const { open, setOpen, selected, setSelected, options } = props;
    const ref = useRef();

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setOpen]);

    return (
        <div ref={ref} className="relative w-18 md:w-40 text-[12px] md:text-lg">
            <button
                onClick={() => setOpen(!open)}
                className="w-full bg-white border-2 border-gray-200 duration-200 p-2 rounded-lg hover:bg-gray-100 hover:border-gray-300 
                            active:scale-[0.98] flex justify-between items-center">
                {selected}
                <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""} opacity-60`}>
                    ▼
                </span>
            </button>

            {open && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                    {options.map((opt) => (
                        <p key={opt} className={`p-2 cursor-pointer transition-colors duration-150 hover:bg-violet-50 hover:text-violet-600
                                ${selected === opt ? "bg-violet-100 text-violet-700 font-medium" : ""}`}
                            onClick={() => { setSelected(opt); setOpen(false); }}>
                            {opt}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}