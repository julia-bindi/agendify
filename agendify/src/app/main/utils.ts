export const mountFilter = (data: CompanyType[]) => {
    let catogoriesFilter: string[] = [];
    let statesFilter: string[] = [];
    let citiesFilter: string[] = [];

    data.forEach((d) => {
        const { category, state, city } = d;
        category.forEach((c) => {
            if (catogoriesFilter.indexOf(c) === -1) catogoriesFilter.push(c);
        });
        if (statesFilter.indexOf(state) === -1) statesFilter.push(state);
        if (citiesFilter.indexOf(city) === -1) citiesFilter.push(city);
    });

    return { catogoriesFilter, statesFilter, citiesFilter };
};
