import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'general';
  const searchQuery = searchParams.get('search');
  const apiKey = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API Key not found' }, { status: 500 });
  }
  let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${apiKey}`;
  if (searchQuery) {
    url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&apikey=${apiKey}`;
  }
  try {
    const response = await axios.get(url);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("GNews Error:", error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}