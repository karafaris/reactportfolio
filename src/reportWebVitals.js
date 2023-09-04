// This function is used to report web performance metrics.
const reportWebVitals = onPerfEntry => {
  // Check if the onPerfEntry callback function is provided and is a function.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library and its functions.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each performance metric function with the provided callback.
      // These functions measure various web performance metrics.
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

// Export the reportWebVitals function to make it accessible from other modules.
export default reportWebVitals;

