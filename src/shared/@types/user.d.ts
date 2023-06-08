declare namespace IUser {
  interface Payload {
    CandidateJobHistories?: [];
    CandidateJobInterests?: [];
    Qualifications?: [];
    Roles?: IRole.Payload[];
    dob?: string;
    email?: string;
    email_confirmation_code?: string;
    fcm_token?: string;
    first_name?: string;
    hourly_rate?: number;
    id?: number;
    is_enabled?: number;
    is_visible?: number;
    job_type_id?: number;
    last_name?: number;
    pay_required?: number;
    phone?: string;
    profile_image_url?: string;
    resume_url?: string;
    social_media_platform?: string;
    status?: string;
    suburb?: string;
    years_of_experience?: number;
  }
}
