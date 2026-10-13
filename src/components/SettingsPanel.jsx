export default function SettingsPanel({
  type,
  settings,
  updateSetting,
}) {
  if (type === "music") {
    return (
    <div className="settings-panel">
      <div className="setting-row">
        <span>track</span>

        <select 
          value={settings.track}
          onChange={(event) =>
            updateSetting(
              "track",
              event.target.value
            )
          }
        >
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
          value={settings.volume}
          onChange={(event) =>
            updateSetting(
              "volume",
              Number(event.target.value)
            )
          }
        />
        <span>{settings.volume}%</span>
      </div>
    </div>
    );
  }

  if (type === "appearance") {
    return (
      <div className="settings-panel">
        <div className="setting-row">
          <span>terminal-color</span>

          <select 
            value={settings.terminalColor}
            onChange={(event) =>
              updateSetting(
                "terminalColor",
                event.target.value
              )
            }
          >
            <option value="cyan">Cyan</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="white">White</option>
          </select>
        </div>

        <div className="setting-row">
          <span>ascii-background</span>

          <input
            type="checkbox"
            checked={settings.asciiBackground}
            onChange={(event) =>
              updateSetting(
                "asciiBackground",
                event.target.checked
              )
            }
          />
        </div>

        <div className="setting-row">
          <span>scanlines</span>

          <input
            type="checkbox"
            checked={settings.scanlines}
            onChange={(event) =>
              updateSetting(
                "scanlines",
                event.target.checked
              )
            }
          />
        </div>

        <div className="setting-row">
          <span>crt-glow</span>

          <input
            type="checkbox"
            checked={settings.crtGlow}
            onChange={(event) =>
              updateSetting(
                "crtGlow",
                event.target.checked
              )
            }
          />
        </div>
      </div>
    );
  }
  
  return null;
}