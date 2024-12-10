import React, { useState, useRef, useEffect } from "react";
import { DAYS } from "../constants/constant";

const DateScroller = () => {
    const [activeDate, setActiveDate] = useState(2);
    const dates = Array.from({ length: 31 }, (_, i) => ({ date: i + 1, day: DAYS[(i) % 7] }));
    const containerRef = useRef(null);

    const handleScroll = () => {
        const container = containerRef.current;

        const children = Array.from(container.children);
        const centeredElement = children.reduce((closest, child) => {
            const childCenter =
                child.offsetLeft + child.offsetWidth / 2 - container.scrollLeft;
            const closestCenter =
                closest.offsetLeft +
                closest.offsetWidth / 2 -
                container.scrollLeft;

            return Math.abs(childCenter - container.offsetWidth / 2) <
                Math.abs(closestCenter - container.offsetWidth / 2)
                ? child
                : closest;
        });

        const centeredDate = parseInt(centeredElement.textContent, 10);
        setActiveDate(centeredDate);
    };

    useEffect(() => {
        const container = containerRef.current;
        const debounceScroll = () => {
            clearTimeout(container._scrollTimeout);
            container._scrollTimeout = setTimeout(() => handleScroll(), 10);
        };

        container.addEventListener("scroll", debounceScroll);
        return () => container.removeEventListener("scroll", debounceScroll);
    }, []);

    return (
        <div className="relative w-full pt-4">
            <div
                ref={containerRef}
                className="flex overflow-x-auto scrollbar-hide items-center space-x-6 px-4 pt-4"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {/* For Adding space for the first and last */}
                {['', ...dates, ''].map((item) => (
                    <div className="flex flex-col items-center gap-2">
                        <div key={item.date} className={`flex-shrink-0 w-20 h-20 flex justify-center items-center rounded-full text-[34px] font-500 ${item.date === activeDate ? "border-2 border-pink text-black font-bold" : "bg-transparent text-gray-600"}`}
                            style={{
                                scrollSnapAlign: "center",
                                transition: "opacity 0.3s ease, transform 0.3s ease",
                                opacity: item.date === activeDate ? 1 : 0.5,
                            }}
                        >
                            {item.date}
                        </div>
                        <span>{item.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DateScroller;
