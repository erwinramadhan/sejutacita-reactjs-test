import lineToday from "../../services/apis/lineToday";

export const fetchArticleData = async () => {
  const response = await lineToday.get('/portaljson');
  // const response = await lineToday.get('/user-profile/all')

  return response.data;
}