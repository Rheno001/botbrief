const categories = [
    {
        id: "technology",
        name: "Technology",
        description: "latest Tech News and Innovations"
    }, 
    {
        id: "technology",
        name: "Technology",
        description: "latest Tech News and Innovations"
    }, 
    {
        id: "technology",
        name: "Technology",
        description: "latest Tech News and Innovations"
    }, 
    {
        id: "technology",
        name: "Technology",
        description: "latest Tech News and Innovations"
    }, 
    {
        id: "technology",
        name: "Technology",
        description: "latest Tech News and Innovations"
    }, 
    {
        id: "technology",
        name: "Technology",
        description: "latest Tech News and Innovations"
    }, 
]

export default function SelectPage(){
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
                </div>
                {/**Category */}
                <div></div>
            </form>
        </div>
    </div>
}