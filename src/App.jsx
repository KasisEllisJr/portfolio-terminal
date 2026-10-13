import { useEffect, useState } from "react";
import "./App.css";

import AsciiBackground from "./components/AsciiBackground";
import MainMenu from "./components/MainMenu";
import SubMenu from "./components/SubMenu";
import ContentDisplay from "./components/ContentDisplay";
import { menuData } from "./data/menuData";

const terminalColors = {
  cyan: "#00f5c8",
  green: "#33ff66",
  purple: "#b57aff",
  white: "#e8f0ed",
};
const backgroundColors = {
  cyan: "#06352e",
  green: "#07351a",
  purple: "#241438",
  white: "#292f2d",
};

const defaultSettings = {
  track: "off",
  volume: 40,

  terminalColor: "cyan",

  asciiBackground: true,
  scanlines: true,
  crtGlow: true,
};

function App() {
  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const [openMenuIndex, setOpenMenuIndex] =
    useState(null);

  const [subMenuIndex, setSubMenuIndex] =
    useState(null);

  const [selectedContent, setSelectedContent] =
    useState(null);
  
  const [activePanel, setActivePanel] =
    useState("main");

  const [settings, setSettings] = useState(() => {
    const savedSettings =
      localStorage.getItem("portfolio-settings");
    if (!savedSettings) {
      return defaultSettings;
    }

    try {
      return {
        ...defaultSettings,
        ...JSON.parse(savedSettings),
      };
    } catch {
      return defaultSettings;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "portfolio-settings",
      JSON.stringify(settings)
    );
  }, [settings]);

  const terminalColor =
    terminalColors[settings.terminalColor] ?? terminalColors.cyan;

  const backgroundColor =
    backgroundColors[settings.terminalColor] ?? backgroundColors.cyan;

  const activeMenu =
    openMenuIndex !== null
      ? menuData[openMenuIndex]
      : null;

  function openMenu(index) {
    const item = menuData[index];

    setSelectedIndex(index);

    if (item.children) {
      setOpenMenuIndex(index);
      setSubMenuIndex(null);
      setSelectedContent(null);

      setActivePanel("submenu");
    }
  }

  function openSubMenuItem(item) {
    setSelectedContent(item);
    setActivePanel("content");
  }

  function updateSetting(name, value) {
    setSettings((current) => ({
      ...current,
      [name]: value,
    }))
  }

  useEffect(() => {
    function handleKeyDown(event) {
      const children = activeMenu?.children;

      // -----------------------
      // MAIN MENU
      // -----------------------

      if (activePanel === "main") {
        if (event.key === "ArrowDown") {
          event.preventDefault();

          setSelectedIndex((current) => {
            if (current === null) {
              return 0;
            }

            return (current + 1) % menuData.length;
          });
        }

        if (event.key === "ArrowUp") {
          event.preventDefault();

          setSelectedIndex((current) => {
            if (current === null) {
              return menuData.length - 1;
            }

            return (
              (current - 1 + menuData.length) %
              menuData.length
            );
          });
        }

        if (
          event.key === "ArrowRight" ||
          event.key === "Enter"
        ) {
          if (selectedIndex !== null) {
            openMenu(selectedIndex);
          }
        }

        return;
      }

      // -----------------------
      // SUBMENU
      // -----------------------

      if (activePanel === "submenu") {
        if (!children) {
          return;
        }

        if (event.key === "ArrowDown") {
          event.preventDefault();

          setSubMenuIndex((current) => {
            if (current === null) {
              return 0;
            }

            return (current + 1) % children.length;
          });
        }

        if (event.key === "ArrowUp") {
          event.preventDefault();

          setSubMenuIndex((current) => {
            if (current === null) {
              return children.length - 1;
            }

            return (
              (current - 1 + children.length) %
              children.length
            );
          });
        }

        if (event.key === "ArrowLeft") {
          setActivePanel("main");

          return;
        }

        if (
          event.key === "ArrowRight" ||
          event.key === "Enter"
        ) {
          if (subMenuIndex !== null) {
            setSelectedContent(
              children[subMenuIndex]
            );

            setActivePanel("content");
          }
        }

        return;
      }

      // -----------------------
      // CONTENT PANEL
      // -----------------------

      if (activePanel === "content") {
        if (event.key === "ArrowLeft") {
          setActivePanel("submenu");
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedIndex,
    subMenuIndex,
    activePanel,
    activeMenu,
  ]);

  return (
    <div
      className={`terminal ${
        settings.crtGlow ? "crt-glow" : ""
      }`}
      style={{
        "--terminal-color": terminalColor,
      }}
    >
      {settings.asciiBackground && (
        <AsciiBackground color={backgroundColor} />
      )}

      <div className="screen">
        <header className="top-bar">
          <span>&gt; PORTFOLIO://HOME</span>

          <span>SYSTEM ONLINE</span>
        </header>

        <main className="terminal-content">
          <MainMenu
            items={menuData}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            onOpen={openMenu}
            isActive={activePanel === "main"}
            setActivePanel={setActivePanel}
          />

          <SubMenu
            items={activeMenu?.children}
            selectedIndex={subMenuIndex}
            setSelectedIndex={setSubMenuIndex}
            onOpen={openSubMenuItem}
            isActive={activePanel === "submenu"}
            setActivePanel={setActivePanel}
          />

          <ContentDisplay
            selectedItem={selectedContent}
            isActive={activePanel === "content"}
            setActivePanel={setActivePanel}
            settings={settings}
            updateSetting={updateSetting}
          />
        </main>

        <footer className="status-bar">
          <span>[ ↑↓ ] Navigate</span>
          <span>[ → ] Open</span>
          <span>[ ← ] Back</span>
          <span>[ Enter ] Select</span>
        </footer>
      </div>
      {settings.scanlines && (
        <div className="crt-overlay" />
      )}
    </div>
  );
}

export default App;