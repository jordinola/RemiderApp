import { Eye, Plus } from "lucide-react";
import type { Event } from "../../types/DashboardTypes";
import Table, { type Column } from "../ui/Table";

const Events = () => {
  const eventColumns: Column<Event>[] = [
    { key: "Title", label: "Title" },
    { key: "Description", label: "Description" },
    { key: "StartDate", label: "Start Date" },
    { key: "EndDate", label: "End Date" },
  ];

  const data: Event[] = [
    {
      Id: "1",
      Title: "title",
      Description: "test",
      StartDate: new Date(),
      EndDate: new Date(),
      CreatedAt: new Date(),
    },
  ];

  return (
    <div className="flex flex-col items-end gap-4">
      <div className="flex gap-3">
        <Eye className="hover:cursor-pointer" />
        <Plus className="hover:cursor-pointer" />
      </div>
      <div className="w-full rounded-lg bg-white">
        <Table data={data} columns={eventColumns} rowKey="Id" />
      </div>
    </div>
  );
};

export default Events;
