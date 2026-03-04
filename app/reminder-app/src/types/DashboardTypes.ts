export type ReminderTable = {
  Id: string;
  Description: string;
  IsCompleted: boolean;
  AlertAt?: Date | null;
};

export type EventTable = {
  Id: string;
  Title: string;
  Description: string;
  StartDate: Date;
  EndDate: Date;
};
