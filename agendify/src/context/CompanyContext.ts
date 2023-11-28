import { createContext } from "react";

const DEFAULT_CONTEXT: Company = {
    email: "",
    image: "",
    name: "",
    category: [],
    description: "",
    workDays: [],
    startTime: "",
    endTime: "",
    street: "",
    homeNumber: "",
    neighborhood: "",
    state: "",
    city: "",
    setCompany: () => {},
};

export const CompanyContext = createContext(DEFAULT_CONTEXT);
