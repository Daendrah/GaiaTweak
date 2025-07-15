export interface PipelineJobStep {
    name: string;
    run: (context: any) => Promise<void>;
}

export interface PipelineJob {
    steps: PipelineJobStep[];
}
