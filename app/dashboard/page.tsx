"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function DashboardPage() {
    const router = useRouter()
    return <div>
        <div>
            <div>
                <div>
                    <h1>Your Newsletter Dashboard</h1>
                    <p>manage your personalized newletter preferences</p>
                </div>

                <div>
                    <div>
                        <h2>Current Preferences</h2>
                        <div className="text-center py-8">
                            <p className="text-gray-600 mb-4">No preferences set yet</p>
                            <Link href="/select" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold">Set up Newsletter</Link>
                        </div>
                    </div>

                    <div>
                        <h2>Actions</h2>
                        <div>
                            <button onClick={() => router.push("/select")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                <path d="M8 12l2 2 4-4" stroke-width="2.5" />
                            </svg>Update Preferences</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}