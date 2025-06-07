import { NextResponse } from 'next/server';

// Simple in-memory storage for contact form submissions (in a real app, you would use a database)
interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  phone?: string;
  service?: string;
  timestamp: string;
  id: string;
}

const contactSubmissions: ContactSubmission[] = [];

export async function POST(request: Request) {
  try {
    // Parse the incoming request
    const formData = await request.json();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Add timestamp
    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    // Store submission (in memory for now)
    contactSubmissions.push(submission);
    console.log('[API] New contact form submission:', submission);
    console.log('[API] Total submissions:', contactSubmissions.length);
    
    // In a real application, you would store this in a database
    // or send it via email to a recipient
    
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully"
    });
  } catch (error) {
    console.error('[API] Error in contact API route:', error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET handler to retrieve submissions (for demo purposes)
export async function GET() {
  return NextResponse.json({
    success: true,
    data: contactSubmissions
  });
}