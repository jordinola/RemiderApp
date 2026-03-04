import Events from "../components/dashboard/Events";
import Reminders from "../components/dashboard/Reminders";

const Dashboard = () => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <div className="px-10 py-5">
      <h1 className="py-5">Don't Forget!!!</h1>

      <div className="grid grid-cols-2 gap-4">
        <Reminders />

        <Events />
      </div>

      {/* <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button> */}
    </div>
  );
};

export default Dashboard;
