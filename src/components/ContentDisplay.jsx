import SettingsPanel from "./SettingsPanel";
import ProjectsOverview from "./ProjectsOverview";
import LeagueAnalyticsProject from "./LeagueAnalyticsProject";


export default function ContentDisplay({
  selectedItem,
  isActive,
  setActivePanel,
  settings,
  updateSetting,
}) {
  if (!selectedItem) {
    return (
      <section
        className={`content-display ${
          isActive ? "panel-active" : "panel-inactive"
        }`}
        onMouseEnter={() => setActivePanel("content")}
      >
        <p>Welcome to my personal portfolio.</p>

        <p>
          Select a directory to explore the system.
        </p>
      </section>
    );
  }

  if (selectedItem.id === "music" || selectedItem.id === "appearance") {
    return (
      <section
        className={`content-display ${
          isActive ? "panel-active" : "panel-inactive"
        }`}
        onMouseEnter={() => setActivePanel("content")}
      >
        <h1>{selectedItem.title}</h1>

        <div className="content-divider">
          --------------------------------
        </div>

        <SettingsPanel 
        type={selectedItem.id}
        settings={settings}
        updateSetting={updateSetting}
        />
      </section>
    );
  }

  if (selectedItem?.id === "projects-overview") {
    return (
      <section
        className={`content-display ${
          isActive ? "panel-active" : "panel-inactive"
        }`}
        onMouseEnter={() => setActivePanel("content")}
      >
        <h1>PROJECT DIRECTORY</h1>

        <div className="content-divider">
          ─────────────────────────
        </div>

        <ProjectsOverview />
      </section>
    );
  }
  if (selectedItem.id === "data-analytics") {
    return (
      <section
        className={`content-display ${
          isActive ? "panel-active" : "panel-inactive"
        }`}
      >
        <h1>LEAGUE ANALYTICS</h1>

        <div className="content-divider">
          --------------------------------
        </div>

        <LeagueAnalyticsProject />
      </section>
    );
  }
  
  return (
    <section
      className={`content-display ${
        isActive ? "panel-active" : "panel-inactive"
      }`}
      onMouseEnter={() => setActivePanel("content")}
    >
      <h1>{selectedItem.title}</h1>

      <div className="content-divider">
        --------------------------------
      </div>

      <p>{selectedItem.content}</p>
    </section>
  );
}