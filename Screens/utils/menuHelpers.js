// utils/menuHelper.js

export const menuHelper = (dishes, action, category = "All") => {
  switch (action) {
    case "average": {
      const filtered =
        category === "All"
          ? dishes
          : dishes.filter(d => d.category === category);
      return filtered.length
        ? filtered.reduce((sum, d) => sum + d.price, 0) / filtered.length
        : 0;
    }
    case "filter":
      return category === "All" ? dishes : dishes.filter(d => d.category === category);

    case "count":
      return category === "All"
        ? dishes.length
        : dishes.filter(d => d.category === category).length;

    case "format":
      return `R${category.toFixed(0)}`;

    default:
      return null;
  }
};

