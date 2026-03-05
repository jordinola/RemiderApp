import { Eye, Plus } from "lucide-react";
import { useModalContext } from "../../contexts/ModalContext";
import type { ReminderTable } from "../../types/DashboardTypes";
import Table, { type Column } from "../ui/Table";

const Reminders = () => {
  const { openModal } = useModalContext();

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

  const openModalHandler = () => {
    openModal(<div>hello</div>);
  };

  return (
    <div className="flex flex-col items-end gap-4">
      <div className="flex gap-3">
        <Eye className="hover:cursor-pointer" />
        <Plus className="hover:cursor-pointer" onClick={openModalHandler} />
      </div>
      <div className="w-full rounded-lg bg-white">
        <Table data={data} columns={reminderColumns} rowKey="Id" />
      </div>
    </div>
  );
};

export default Reminders;
