const API_URL = import.meta.env.VITE_URL || 'http://localhost:5173';

export const getAllQuestions = async () => {
  const res = await fetch(`${API_URL}/data.json`);
  const json = await res.json()
  return json
}