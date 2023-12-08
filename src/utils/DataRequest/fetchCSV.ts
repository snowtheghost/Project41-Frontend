import axios from 'src/utils/axiosInstance';

const fetchCSV = async (gameType: string) => {
  try {
    await axios
      .get(`/games/getGameAnalytics?gameType=${gameType}`)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${gameType}_results.csv`);
        document.body.appendChild(link);
        link.click();
      });
  } catch (error) {
    console.error(error);
  }
};

export default fetchCSV;
