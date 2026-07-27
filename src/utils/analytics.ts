declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
};

export const identifyUser = (userId: string, userData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', 'G-EHL1TGDB82', {
      user_id: userId,
      ...userData
    });
  }
};

export const setUserData = (email?: string, phone?: string, name?: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('set', 'user_data', {
      email,
      phone_number: phone,
      address: {
        first_name: name,
      }
    });
  }
};
