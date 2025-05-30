import React, { useState } from "react";

const CategoryIcons = {
    "Bio": (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 me-2 text-[var(--sec)] opacity-70" viewBox="0 0 16 16">
            <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
            <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5" />
        </svg>
    ),
    "Education": (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 me-2 text-[var(--sec)] opacity-70" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
        </svg>
    ),
    "Experience": (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 me-2 text-[var(--sec)] opacity-70" viewBox="0 0 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
        </svg>
    ),
};

const SkillsList = () => {
    const [openItem, setOpenItem] = useState<string | null>("");
    const logoWall = {
        "Bio": [
            "Software Engineer",
        ],
        "Education": [
            "MSc in Computer Science at University of Insubria",
            "BSc in Computer Science at University of Insubria"
        ],
        "Experience": [
            "Software Engineer at Motus ml",
            "Data Scientist Intern at University of Insubria",
        ],
    };

    const toggleItem = (item: string) => {
        setOpenItem(openItem === item ? null : item);
    };

    return (
        <div>
            <ul className="space-y-4 text-lg">
                {Object.entries(logoWall).map(([category, items]) => (
                    <li key={category} className="w-full">
                        <div onClick={() => toggleItem(category)} className="md:w-[100] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden">
                            <div className="flex items-center gap-3 p-4">
                                {CategoryIcons[category]}
                                <div className="flex items-center gap-2 flex-grow justify-between">
                                    <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                                        <span className="block truncate text-[var(--white)] text-lg">{category}</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${openItem === category ? "rotate-180" : ""
                                            }`}>
                                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div
                                className={`transition-all duration-300 px-4 ${openItem === category
                                    ? "max-h-[500px] pb-4 opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}>
                                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                                    {items.map((item, index) => (
                                        <div key={index} className="flex items-center">
                                            <span className="pl-1">•</span>
                                            <li className="pl-3">{item}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsList;
