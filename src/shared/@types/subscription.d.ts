declare namespace ISubscription {
  interface Payload {
    id?: number;
    title?: string;
    description?: string;
    price?: number;
    no_of_candidates?: number;
    work_now_jobs?: number;
    permanent_jobs?: number;
    trial_days?: string;
    interval?: string;
    price_id?: string;
    is_enabled?: number;
  }
}
