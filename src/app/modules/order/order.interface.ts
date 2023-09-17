export type IOrderRequestBody = {
  orderedBooks: IOrderRequestItem[];
};

export type IOrderRequestItem = {
  bookId: string;
  quantity: number;
};
