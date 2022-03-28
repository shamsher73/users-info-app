import Config from "../constants/Config";

const baseUrl = Config.apiUrl+"/?results=";

export const callAPI = async (filters) => {
    const maxResult = 10;
    const noOfResults = filters.noOfResults > maxResult ? maxResult : filters.noOfResults;
    const response = await fetch(baseUrl+noOfResults+'&gender='+filters.gender+'&nat='+filters.countries);
    const data = await response.json();
    return data.results
};

