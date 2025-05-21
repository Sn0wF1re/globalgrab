// Composable for handling breadcrumbs
export const useBreadcrumbs = () => {
  /**
   * Generates breadcrumb list for schema.org structured data
   * @param {Array} items - Array of breadcrumb items
   * @returns {Object} - Object with items property for the BreadcrumbList schema
   */
  const generateBreadcrumbList = (items) => {
    return {
      items: items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://globalgrab.co.ke${item.path}`
      }))
    };
  };

  return {
    generateBreadcrumbList
  };
};
