export const mountFilter = (data: CompanyType[]) => {
    let categoriesFilter: string[] = [];
    let statesFilter: string[] = [];
    let citiesFilter: string[] = [];

    data.forEach((d) => {
        const { category, state, city } = d;
        category.forEach((c) => {
            if (categoriesFilter.indexOf(c) === -1) categoriesFilter.push(c);
        });
        if (statesFilter.indexOf(state) === -1) statesFilter.push(state);
        if (citiesFilter.indexOf(city) === -1) citiesFilter.push(city);
    });

    return { categoriesFilter, statesFilter, citiesFilter };
};

export const parseHour = (hour:string) => (
    Date.parse('01/01/2011 ' + hour + ':00')
)