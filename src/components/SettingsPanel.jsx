export default function SettingsPanel() {
  return (
    <section className="settings-panel">
      <div className="setting-row">
        <span>music</span>

        <select defaultValue="off">
          <option value="off">off</option>
          <option value="track-01">track-01</option>
          <option value="track-02">track-02</option>
        </select>
      </div>

      <div className="setting-row">
        <span>volume</span>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="40"
        />
      </div>

      <div className="setting-row">
        <span>terminal-color</span>

        <select defaultValue="cyan">
          <option value="cyan">cyan</option>
          <option value="green">green</option>
          <option value="amber">amber</option>
          <option value="white">white</option>
        </select>
      </div>

      <div className="setting-row">
        <span>ascii-background</span>

        <input
          type="checkbox"
          defaultChecked
        />
      </div>

      <div className="setting-row">
        <span>scanlines</span>

        <input
          type="checkbox"
          defaultChecked
        />
      </div>

      <div className="setting-row">
        <span>crt-glow</span>

        <input
          type="checkbox"
          defaultChecked
        />
      </div>
    </section>
  );
}