export interface stepPayload {
    name: string;
    description: string;
    date: Date;
    done: boolean;
}


export interface changeStepStatus {
    id: string;
    stepStatus: boolean;
    stepData: stepPayload;
}
