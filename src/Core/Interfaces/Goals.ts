import {stepPayload} from "@/store/Goal/interfaces/goalInterfaces";

export default interface GoalsInterface {
    date: Date|string;
    description: string;
    name: string;
    status: boolean;
    steps: [stepPayload];
}
