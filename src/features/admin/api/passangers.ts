import type { ApiPassenger } from "../../../shared/model/passanger";

export const getPassangers = async (page: number): Promise<ApiPassenger[]> => {
  const response = await fetch(`http://92.118.114.29:8080/api/passengers?page=${page}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  
  return data.content;
}