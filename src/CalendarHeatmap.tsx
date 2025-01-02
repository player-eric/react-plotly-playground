import React from "react";
import Plot from "react-plotly.js";

const CalendarHeatmap = () => {
  const year = 2025;
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year + 1, 0, 1);
  const dates = [];
  const activities = [];

  // Generate all dates and activities for the year
  for (
    let dt = new Date(startDate);
    dt < endDate;
    dt.setDate(dt.getDate() + 1)
  ) {
    const date = new Date(dt);
    dates.push(date);
    // Example: Random activity level (replace with your actual data)
    activities.push(Math.floor(Math.random() * 10));
  }

  // Extract data for plotting
  const dayOfWeek = dates.map((date) => date.getDay()); // 0 (Sunday) to 6 (Saturday)
  const month = dates.map((date) =>
    date.toLocaleString("default", { month: "short" })
  ); // e.g., Jan, Feb

  // Create hover text
  const hoverText = dates.map(
    (date, i) => `${date.toDateString()}: Activity Level ${activities[i]}`
  );

  return (
    <Plot
      data={[
        {
          x: month,
          y: dayOfWeek,
          z: activities,
          type: "heatmap",
          colorscale: [
            [0, "lightgreen"], // Low activity
            [1, "darkgreen"], // High activity
          ],
          text: hoverText,
          hoverinfo: "text",
          showscale: true,
        },
      ]}
      layout={{
        title: "Calendar Heatmap (Days vs Months)",
        xaxis: {
          title: "Months",
          tickmode: "array",
          tickvals: Array.from(new Set(month)), // Unique month values
        },
        yaxis: {
          title: "Day of Week",
          tickmode: "array",
          tickvals: [0, 1, 2, 3, 4, 5, 6],
          ticktext: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        margin: { t: 50, b: 50, l: 50, r: 50 },
      }}
    />
  );
};

export default CalendarHeatmap;
