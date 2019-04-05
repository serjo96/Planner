export interface stepPayload {
    name: string;
    description: string;
    date: Date | string;
    done: boolean;
}


export interface changeStepStatus {
    id: string;
    stepStatus: boolean;
    stepData: stepPayload;
}
