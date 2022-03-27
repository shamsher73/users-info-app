

const url = "https://randomuser.me/api/?results=";

export const callAPI = async (filters) => {
    const maxResult = 10;
    const noOfResults = filters.noOfResults > maxResult ? maxResult : filters.noOfResults;
    return fetch(url+noOfResults+'&gender='+filters.gender+'&nat='+filters.countries);
};
