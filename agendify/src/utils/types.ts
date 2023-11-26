type Action = {
    type: string;
    value?: any;
};

type AuthType = {
    token: string;
    userType: string;
    name: string;
};

type Auth = Pick<AuthType, "token" | "userType" | "name"> & {
    setToken: Function;
    setUserType: Function;
    setName: Function;
    clear: Function;
};

type RegisterType = {
    email: string;
    password: string;
};

type Register = Pick<RegisterType, "email" | "password"> & {
    setEmail: Function;
    setPassword: Function;
};

type AccessibilityType = {
    mode: "light" | "dark";
};

type Accessibility = Pick<AccessibilityType, "mode"> & {
    setMode: Function;
};
