declare namespace IBusiness {
  interface WorkNowPayload {
    id: string;
    state: string;
    startTime: string;
    finishTime: string;
    hourlyRate: string;
    publishTime: string;
    date: string;
    status: string;
    role: string;
  }

  interface PermanantPayload {
    id: string;
    role: string;
    work: string;
    remuneration: string;
    applications: string;
    date: string;
    status: string;
  }

  interface ApplicationDetailPayload {
    id: string;
    profile_picture: string;
    employee_name: string;
    myRating: number;
    job_role: string;
    job_type: string;
    email_id: string;
    phone_number: string;
    date: string;
    rating?: number;
    applicant_name: {
      employee_name: string;
      rating: string;
      totalReview: string;
    };
  }

  interface WorkNowJobsPayload {
    applications_count: ReactNode;
    job_location: ReactNode;
    shift_end_time: ReactNode;
    end_date: ReactNode;
    Role: any;
    id?: string;
    hourly_rate?: number;
  }
}
