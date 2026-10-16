const repositoryUrl =
  "https://github.com/KasisEllisJr/league-analytics";

const technologies = [
  "Java 21",
  "Spring Boot",
  "SQL Server",
  "React",
  "Vite",
  "Recharts",
  "Maven",
  "JUnit 5",
  "Vitest",
];

const features = [
  {
    title: "Champion Explorer",
    description:
      "Search, filter, and sort champions by their recorded statistics and roles.",
  },
  {
    title: "Champion Analytics",
    description:
      "Rank champion attributes, calculate role averages, and visualize estimated stat growth by level.",
  },
  {
    title: "Item Explorer",
    description:
      "Explore item prices, attributes, recipes, and recorded effects.",
  },
  {
    title: "Item Comparison",
    description:
      "Compare equipment statistics and purchase costs side by side.",
  },
  {
    title: "Gold Efficiency",
    description:
      "Analyze individual item statistics normalized per 1,000 gold.",
  },
];

const dataset = [
  { label: "CHAMPIONS", value: "173" },
  { label: "ITEMS", value: "253" },
  { label: "RECIPES", value: "409" },
  { label: "ITEM EFFECTS", value: "242" },
];

export default function LeagueAnalyticsProject() {
  return (
    <div className="league-project">

      <div className="league-project-status">
        [ LOCAL BUILD - PUBLIC DEPLOYMENT PLANNED ]
      </div>

      <p className="league-project-description">
        Kazer0 League Analytics is a full-stack data
        analytics application built to explore League of
        Legends champion and item reference data.
        It combines Java-based data ingestion, relational
        database storage, a Spring Boot REST API, and an
        interactive React dashboard.
      </p>

      <div className="league-project-section">
        <h2>[ 01 ] PROJECT OBJECTIVE</h2>

        <p>
          Transform raw champion and item data into a
          structured, searchable analytics platform.
          The project demonstrates data collection,
          transformation, database management,
          backend development, and visualization.
        </p>
      </div>

      <div className="league-project-section">
        <h2>[ 02 ] TECHNOLOGIES</h2>

        <div className="league-tech-list">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="league-project-section">
        <h2>[ 03 ] DATASET</h2>

        <p>
          League of Legends reference data from Riot
          Data Dragon, patch 26.20, supplemented with
          League Wiki information for attack damage growth.
        </p>

        <div className="league-dataset-grid">
          {dataset.map((entry) => (
            <div
              className="league-dataset-item"
              key={entry.label}
            >
              <strong>{entry.value}</strong>
              <span>{entry.label}</span>
            </div>
          ))}
        </div>

        <p className="league-data-note">
          Approximate import counts documented in
          the project README.
        </p>
      </div>

      <div className="league-project-section">
        <h2>[ 04 ] DATA PIPELINE</h2>

        <div className="league-pipeline">
          <div>RIOT DATA DRAGON + LEAGUE WIKI</div>
          <span>↓</span>
          <div>JAVA DATA IMPORTER + CSV</div>
          <span>↓</span>
          <div>MICROSOFT SQL SERVER</div>
          <span>↓</span>
          <div>SPRING BOOT REST API</div>
          <span>↓</span>
          <div>REACT ANALYTICS DASHBOARD</div>
        </div>
      </div>

      <div className="league-project-section">
        <h2>[ 05 ] ANALYTICS FEATURES</h2>

        <div className="league-features">
          {features.map((feature) => (
            <div
              className="league-feature"
              key={feature.title}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="league-project-section">
        <h2>[ 06 ] DATA METHODOLOGY</h2>

        <p>
          Champion level progression uses a growth
          calculation based on base statistics and
          growth coefficients.
        </p>

        <p>
          Role averages use recorded numeric values
          and track the number of contributing champions.
          Item efficiency calculations compare a
          selected recorded statistic against gold cost.
        </p>

        <p>
          Missing values are handled separately from
          legitimate zero values to avoid misleading
          analytics results.
        </p>
      </div>

      <div className="league-project-section">
        <h2>[ 07 ] PROJECT STATUS</h2>

        <p>
          The repository documents a locally developed
          analytics application. Public hosting, final
          verification, and a live demonstration remain
          part of the deployment roadmap.
        </p>
      </div>

      <div className="league-project-links">
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          [ VIEW GITHUB REPOSITORY ↗ ]
        </a>
      </div>

    </div>
  );
}