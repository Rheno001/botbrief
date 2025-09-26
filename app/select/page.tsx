"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

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
    const { user } = useAuth();
    const router = useRouter();

    function handleCategoryToggle(categoryId: string) {
        setselectedCategories((prev) => prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId])

    }

    async function handleSavePreferences (e: FormEvent){
        e.preventDefault();
        if(selectedCategories.length === 0){
            alert("Please select at least one category")
            return
        }
        if (!user){
            alert("Please sign In to continue")
            return;
        }
        try{
            const response = await fetch("/api/user-preferences",{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    categories: selectedCategories,
                    frequency: selectedFrequency,
                    email: user.email,
                }),
            })
            if(!response.ok){
                throw new Error("Failed to save preferences")
            }
            alert("Your newsletter preferences have been saved. You will start receiving them soon.");
            router.push("/dashboard")

        }catch(error){
            alert("Failed to save preferences, please try again")
        }



    }



    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto p-8">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-800">Customize your Newsletter</h1>
                <p className="mt-3 text-lg text-gray-600">
                    Select your interests and delivery frequency to start receiving personalized newsletters
                </p>
            </div>

            <form onSubmit={handleSavePreferences} className="space-y-12">
                {/* Categories */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Choose your Categories</h2>
                    <p className="text-gray-600 mb-6">Pick topics you’d like to see in your newsletter</p>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category, key) => {
                            const isSelected = selectedCategories.includes(category.id);

                            return (
                                <label
                                    key={key}
                                    className={`flex items-start p-5 border rounded-2xl shadow-sm cursor-pointer transition hover:shadow-md 
                  ${isSelected ? "bg-green-100 border-green-400" : "bg-white border-gray-200"}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => handleCategoryToggle(category.id)}
                                        className="mt-1 h-5 w-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
                                    />

                                    <div className="ml-3">
                                        <div className="font-semibold text-gray-800">{category.name}</div>
                                        <div className="text-sm text-gray-500">{category.description}</div>
                                    </div>
                                </label>
                            );
                        })}
                    </div>

                    {/* Selection count */}
                    <div className="mt-4 text-sm text-gray-600">
                        <span className="font-medium text-gray-800">{selectedCategories.length}</span>{" "}
                        Categor{selectedCategories.length !== 1 ? "ies" : "y"} selected
                    </div>
                </div>

                {/* Frequency */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Delivery Frequency</h2>
                    <p className="text-gray-600 mb-6">How often do you want to receive newsletters?</p>

                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {frequencyOptions.map((frequency, key) => (
                            <label
                                key={key}
                                className={`cursor-pointer rounded-2xl border p-5 shadow-sm transition hover:shadow-md 
                ${selectedFrequency === frequency.id ? "bg-green-100 border-green-400" : "bg-white border-gray-200"}`}
                            >
                                <input
                                    className="sr-only"
                                    type="radio"
                                    checked={selectedFrequency === frequency.id}
                                    onChange={() => setselectedFrequency(frequency.id)}
                                />
                                <div className="flex items-center justify-between">
                                    <div className="text-gray-800 font-medium">{frequency.name}</div>
                                    <div>
                                        {selectedFrequency === frequency.id && (
                                            <div className="h-4 w-4 rounded-full bg-green-500"></div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-2 text-sm text-gray-600">{frequency.description}</div>
                            </label>
                        ))}
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                        <span className="font-medium text-gray-600">{selectedCategories.length}</span>{" "}
                        Categor{selectedCategories.length !== 1 ? "ies" : "y"} selected
                        <span className="font-medium text-gray-600">{" " + selectedFrequency}</span>{" "} delivery
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={selectedCategories.length === 0}
                        className={`px-8 py-3 text-lg font-medium rounded-xl shadow-md transition 
    ${selectedCategories.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`}
                    >
                        Save Preferences
                    </button>

                </div>
            </form>
        </div>
    </div>

}