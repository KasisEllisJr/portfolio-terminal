import { useEffect, useState } from "react";
import "./App.css";

import AsciiBackground from "./components/AsciiBackground";
import MainMenu from "./components/MainMenu";
import SubMenu from "./components/SubMenu";
import ContentDisplay from "./components/ContentDisplay";
import { menuData } from "./data/menuData";

function App() {
  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const [openMenuIndex, setOpenMenuIndex] =
    useState(null);

  const [subMenuIndex, setSubMenuIndex] =
    useState(null);

  const [selectedContent, setSelectedContent] =
    useState(null);

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
    }
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (openMenuIndex === null) {
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

      const children = activeMenu?.children;

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
        setOpenMenuIndex(null);
        setSubMenuIndex(null);
      }

      if (event.key === "Enter") {
        if (subMenuIndex !== null) {
          setSelectedContent(
            children[subMenuIndex]
          );
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
    openMenuIndex,
    activeMenu,
    subMenuIndex,
  ]);

  return (
    <div className="terminal">
      <AsciiBackground />

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
          />

          <SubMenu
            items={activeMenu?.children}
            selectedIndex={subMenuIndex}
            setSelectedIndex={setSubMenuIndex}
            onSelect={setSelectedContent}
          />

          <ContentDisplay
            selectedItem={selectedContent}
          />
        </main>

        <footer className="status-bar">
          <span>[ ↑↓ ] Navigate</span>
          <span>[ → ] Open</span>
          <span>[ ← ] Back</span>
          <span>[ Enter ] Select</span>
        </footer>
      </div>
    </div>
  );
}

export default App;