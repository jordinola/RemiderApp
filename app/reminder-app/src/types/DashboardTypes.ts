type Base = {
  Id: string;
  CreatedAt: Date;
};

export type Reminder = Base & {
  Description: string;
  IsCompleted: boolean;
  AlertAt?: Date | null;
};

export type Event = Base & {
  Title: string;
  Description: string;
  StartDate: Date;
  EndDate: Date;
};
