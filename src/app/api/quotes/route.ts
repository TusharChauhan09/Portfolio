import { NextResponse } from "next/server";
import axios from "axios";

interface QuoteResponse {
  quote: string;
  author: string;
  work?: string;
  categories: string[];
}

export async function GET() {
  try {
    // Using v2 randomquotes - no category filter since "movies" isn't available
    // Returns inspirational/wisdom quotes from various authors
    const response = await axios.get<QuoteResponse[]>(
      "https://api.api-ninjas.com/v2/randomquotes",
      {
        headers: {
          "X-Api-Key": process.env.API_NINJAS_KEY!,
        },
      }
    );

    const quotes: QuoteResponse[] = response.data;

    if (!quotes || quotes.length === 0) {
      return NextResponse.json({ error: "No quotes found" }, { status: 404 });
    }

    const selectedQuote = quotes[0];

    return NextResponse.json({
      quote: selectedQuote.quote,
      author: selectedQuote.author,
      work: selectedQuote.work || null,
      categories: selectedQuote.categories,
    });
  } catch (error: any) {
    console.error("Quote API Error:", error?.response?.data || error.message);
    return NextResponse.json(
      { error: "Failed to fetch quote" },
      { status: 500 }
    );
  }
}
