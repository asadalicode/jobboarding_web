declare namespace IJob {
  interface WorkNowParams {
    type?: string;
    suburb?: string;
    role_id?: number;
    hourly_rate?: string;
    shift_start_time?: string;
    shift_end_time?: string;
    end_date?: Date | string;
    screening_question_ids?: number[];
  }
  interface PermanentJobParams {
    // logo?: any;
    type?: string;
    business_name?: string;
    suburb?: string;
    pay_type?: string;
    pay_required?: string;
    description?: string;
    custom_questions?: any;
    role_id?: number;
    job_type_id?: number;
    experience?: number;
    screening_question_ids?: number[];
  }
  interface SearchParams {
    radius?: number;
    hourly_rate?: number;
    location?: string;
    roles?: number[];
    limit?: number;
  }
  interface Payload {
    id?: number;
    title?: string;
  }
}
