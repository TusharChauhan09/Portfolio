import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const graphqlUrl = process.env.LEETCODE_GRAPHQL_URL;
    if (!graphqlUrl) {
      throw new Error(
        "LEETCODE_GRAPHQL_URL is not defined in environment variables"
      );
    }

    const response = await axios.post(
      graphqlUrl,
      body, // Graphql query
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data, {
      status: response.status,
    });
  } catch (error: any) {
    console.error("Proxy Error:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch from LeetCode." },
      {
        status: error?.response?.status || 500,
      }
    );
  }
}
