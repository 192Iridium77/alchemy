import Card from "./Card";
import { apps } from "../data";

function AppsList() {
  return (
    <div className="AppsList container mt-16">
      <div
        className="flex flex-wrap mt-16"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        {apps.map((app) => {
          return <Card key={app.url} data={app} />;
        })}
      </div>
    </div>
  );
}

export default AppsList;
