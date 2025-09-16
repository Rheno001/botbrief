import { inngest } from "../client"
import { fetchArticles } from "@/lib/news";

export default inngest.createFunction(
    {id:"newsletter/scheduled"}, 
    {event: "newsletter.schedule"}, 
    async({event, step, runId})=> {
    //fetch articles depending on the category of what the user chose
    const allAtricles = await step.run("fetch-news", async()=> {
        const categories = ["technology", "business", "beauty"];
        return fetchArticles(categories);
    });


    //Generating the AI summary
    const summary = await step.ai.infer("summarize-news", {
        model: step.ai.models.openai({model: "gpt-4"}),
        body: {
            messages: [
                {
                    
                }
            ]
        }
    })


});