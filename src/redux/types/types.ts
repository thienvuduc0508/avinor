
export interface News {
    Title: String;
    Ingress: String;
    Id: String;
    CreatedAt: String;
    ImageUrl: String;
    ThumbUrl: String;
    Content?: String;
}
export type NewsState = {
    news: News[];
    loading: Boolean;
    error: String;
}
export type NewsAction = {
    type: String;
    payload: any
}