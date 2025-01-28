// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: string;
    name: string;
    email: string;
    phone: string;
    skills: string[];
    experience: number;
    education: string;
    location: string;
    availability: boolean;
}
