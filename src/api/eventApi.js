const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const submitEventData = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit event data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting event data:', error);
    throw error;
  }
};

