"use client";

import { useState } from "react";

const categories = [
    {
        id: "technology",
        name: "Technology",
        description: "Latest tech news, gadgets, and innovations shaping the future"
    },
    {
        id: "business",
        name: "Business",
        description: "Insights on markets, startups, finance, and global economy"
    },
    {
        id: "health",
        name: "Health",
        description: "Updates on wellness, medicine, nutrition, and fitness"
    },
    {
        id: "science",
        name: "Science",
        description: "Discoveries and research across physics, biology, and space"
    },
    {
        id: "sports",
        name: "Sports",
        description: "Coverage of football, basketball, athletics, and more"
    },
    {
        id: "entertainment",
        name: "Entertainment",
        description: "Movies, music, celebrity news, and pop culture trends"
    }
];

const frequencyOptions = [
    {
        id: "daily",
        name: "Daily",
        description: "Everyday"
    },
     {
        id: "weekly",
        name: "Weekly",
        description: "Once every week"
    },
     {
        id: "biweekly",
        name: "Biweekly",
        description: "Twice every week"
    },
]



export default function SelectPage() {
    const [selectedCategories, setselectedCategories] = useState<string[]>([]);
    const [selectedFrequency, setselectedFrequency] = useState<string>("weekly");
    function handleCategoryToggle(categoryId: string) {
        setselectedCategories((prev) => prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId])

    }



    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Customize your Newsletter</h1>
                <p>Select your interests and delivery frequency to start receiving personalized newletters</p>
            </div>
            <form>
                {/**Category */}
                <div>
                    <h2>Choose your categories</h2>
                    <p>Select topics you'd like to see in your newsletter</p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category, key) => {
                            const isSelected = selectedCategories.includes(category.id);

                            return (
                                <label
                                    key={key}
                                    className={`flex items-start p-4 border rounded-2xl shadow-sm cursor-pointer transition hover:shadow-md 
          ${isSelected ? "bg-green-100 border-green-400" : "bg-white border-gray-200"}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => handleCategoryToggle(category.id)}
                                        className="mt-1 h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                    />

                                    <div className="ml-3">
                                        <div className="font-semibold text-gray-800">{category.name}</div>
                                        <div className="text-sm text-gray-500">{category.description}</div>
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                    <div>
                        {selectedCategories.length} Categor
                        {selectedCategories.length !== 1 ? "ies" : "y"} selected 
                    </div>

                </div>
                {/**Category */}
                <div>
                    <h2>Delivery Frequency</h2>
                    <p>How often do you want to receive newsletters?</p>

                    <div>
                        {frequencyOptions.map((frequency, key) => (
                            <label>
                                <input type="radio" checked={selectedFrequency === frequency.id} onChange={() => setselectedFrequency(frequency.id)}/>
                            </label>
                        ))}

                    </div>
                </div>
            </form>
        </div>
    </div>
}