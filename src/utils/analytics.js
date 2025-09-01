// Google Analytics 4 integration
export const initGA = () => {
  if (typeof window !== 'undefined' && process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
  }
};

// Track page views
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.REACT_APP_GOOGLE_ANALYTICS_ID, {
      page_path: path,
    });
  }
};

// Track events
export const trackEvent = (action, category, label = null, value = null) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track project views
export const trackProjectView = (projectName) => {
  trackEvent('project_view', 'projects', projectName);
};

// Track downloads (like CV)
export const trackDownload = (fileName) => {
  trackEvent('download', 'engagement', fileName);
};
