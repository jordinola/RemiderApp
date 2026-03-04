import { useTheme } from "../contexts/ThemeContext";

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      Dashboard
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </>
  );
};

export default Dashboard;
