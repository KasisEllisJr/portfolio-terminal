import SettingsPanel from "./SettingsPanel";

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