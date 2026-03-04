import type { EventTable } from "../../types/DashboardTypes";
import Table, { type Column } from "../ui/Table";

const Events = () => {
  const eventColumns: Column<EventTable>[] = [
    { key: "Title", label: "Title" },
    { key: "Description", label: "Description" },
    { key: "StartDate", label: "Start Date" },
    { key: "EndDate", label: "End Date" },
  ];

  const data: EventTable[] = [
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
    <div className="w-full rounded-lg bg-white">
      <Table data={data} columns={eventColumns} rowKey="Id" />
    </div>
  );
};

export default Events;
