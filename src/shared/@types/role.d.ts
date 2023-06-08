declare namespace IRole {
  interface Payload {
    id: string;
    title: string;
    status: string;
    screeningQuestioEnabled: number;
  }
}
declare namespace screenQuestionPayload {
  interface Payload {
    id: string;
    question: string;
    type: string;
  }
}
