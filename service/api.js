import Config from "../constants/Config";

const baseUrl = Config.apiUrl+"/?results=";

export const callAPI = async (filters) => {
    try {
        const url = baseUrl+filters.noOfResults+'&gender='+filters.gender+'&nat='+filters.countries;
        const response = await fetch(url);
        const data = await response.json();
        return data.results
    }
    catch(err) {
        console.log(err)
    }
};

