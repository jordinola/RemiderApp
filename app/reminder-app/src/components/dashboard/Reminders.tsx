import type { ReminderTable } from "../../types/DashboardTypes";
import Table, { type Column } from "../ui/Table";

const Reminders = () => {
  const reminderColumns: Column<ReminderTable>[] = [
    { key: "Description", label: "Description" },
    { key: "AlertAt", label: "Alert At" },
    { key: "IsCompleted", label: "Completed" },
  ];

  const data: ReminderTable[] = [
    {
      Id: "1",
      Description: "test",
      AlertAt: undefined,
      IsCompleted: false,
      CreatedAt: new Date(),
    },
  ];

  return (
    <div className="w-full rounded-lg bg-white">
      <Table data={data} columns={reminderColumns} rowKey="Id" />
    </div>
  );
};

export default Reminders;
