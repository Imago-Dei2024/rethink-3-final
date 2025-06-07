// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Function to submit contact form data to our API
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    console.log('Form data:', formData);
    
    // Use the API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    console.log('Response status:', response.status);
    
    let data;
    try {
      data = await response.json();
      console.log('Response data:', data);
    } catch (jsonError) {
      console.error('Error parsing response as JSON:', jsonError);
      const text = await response.text();
      console.log('Response text:', text);
      throw new Error('Failed to parse server response');
    }
    
    if (!response.ok) {
      throw new Error(data.message || 'Error submitting form');
    }
    
    return data;
  } catch (error: unknown) {
    console.error("Error submitting contact form:", error);
    console.error("Error details:", {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    throw error;
  }
}; 