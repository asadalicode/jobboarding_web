declare namespace ICandidate {
  interface Payload {
    id?: string;
    first_name?: string;
    last_name?: string;
    profile_image_url?: string;
    pay_required?: any;
    suburb?: string;
    years_of_experience?: number;
    JobType?: IJob.Payload;
    Roles?: IRole.Payload[];
    hourly_rate?: number;
  }
}
