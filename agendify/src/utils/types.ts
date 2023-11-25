type Action = {
    type: string;
    value?: any;
};

type AuthValues = {
    token: string;
    userType: string;
    name: string;
};

type Auth = Pick<AuthValues, "token" | "userType" | "name"> & {
    setToken: Function;
    setUserType: Function;
    setName: Function;
    clear: Function;
};
