type BaseTable = {
  Id: string;
  CreatedAt: Date;
};

export type ReminderTable = BaseTable & {
  Description: string;
  IsCompleted: boolean;
  AlertAt?: Date | null;
};

export type EventTable = BaseTable & {
  Title: string;
  Description: string;
  StartDate: Date;
  EndDate: Date;
};
