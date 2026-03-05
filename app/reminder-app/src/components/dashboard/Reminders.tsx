import { Eye, Plus } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useModalContext } from "../../contexts/ModalContext";
import type { Reminder } from "../../types/DashboardTypes";
import Table, { type Column } from "../ui/Table";

const CreateQuickReminderForm = ({
  onSave,
}: {
  onSave: (reminder: Reminder) => void;
}) => {
  const { closeModal } = useModalContext();
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = () => {
    if (!description) {
      setErrors((prev) => [...prev, "description"]);
      return;
    }

    const reminder: Reminder = {
      Id: "2",
      CreatedAt: new Date(),
      Description: description!,
      IsCompleted: false,
      AlertAt: date,
    };

    onSave(reminder);
    closeModal();
  };

  return (
    <section className="flex flex-col gap-3">
      <label for="description" className="text-sm">
        Description:
      </label>
      <input
        id="description"
        name="description"
        type="text"
        className={`border rounded-md w-full ${errors.some((e) => e === "description") ? "border-red-500 focus:border-red-600" : "border-amber-200 focus:border-amber-600"} `}
        value={String(description)}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label for="alertAt" className="text-sm">
        Alert at:
      </label>
      <DatePicker
        id="alertAt"
        selected={date}
        onChange={(date: Date | null) => setDate(date)}
        showTimeSelect
        dateFormat="MM/dd/yyyy h:mm aa"
        className="border border-amber-200 rounded-md w-full focus:border-amber-600"
      />

      <div className="flex gap-3 justify-end">
        <input
          type="button"
          value="Cancel"
          className="border border-red-600 rounded-md p-2 text-red-600 w-20 h-10 hover:cursor-pointer"
          onClick={closeModal}
        />
        <input
          type="button"
          value="Save"
          className="border border-green-600 rounded-md p-2 text-green-600 w-20 h-10 hover:cursor-pointer"
          onClick={handleSubmit}
        />
      </div>
    </section>
  );
};

const Reminders = () => {
  const { openModal } = useModalContext();
  const [data, setData] = useState<Reminder[]>([]);

  const reminderColumns: Column<Reminder>[] = [
    { key: "Description", label: "Description" },
    { key: "AlertAt", label: "Alert At" },
    { key: "IsCompleted", label: "Completed" },
  ];

  const openModalHandler = () => {
    openModal(
      <CreateQuickReminderForm
        onSave={(reminder) => setData((prev) => [...prev, reminder])}
      />,
      "Create a quick reminder!",
    );
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
