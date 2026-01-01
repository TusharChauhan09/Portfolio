import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await axios.post(
      LEETCODE_GRAPHQL_URL,
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
