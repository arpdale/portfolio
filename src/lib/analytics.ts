import { useEffect } from 'react';
import { geolocationService } from '@/services/geolocationService';

// Portfolio-specific analytics events with geolocation context
export const analytics = {
  // Navigation tracking
  trackPageView: (pageName: string, additionalData?: Record<string, any>) => {
    geolocationService.trackEventWithGeo('Page View', { 
      page: pageName,
      ...additionalData 
    });
  },

  // Project interaction tracking
  trackProjectView: (projectName: string, projectType?: string) => {
    geolocationService.trackEventWithGeo('Project Viewed', { 
      project: projectName,
      type: projectType || 'unknown'
    });
  },

  trackProjectClick: (projectName: string, source: string) => {
    geolocationService.trackEventWithGeo('Project Clicked', { 
      project: projectName,
      source: source // 'featured', 'work-page', 'case-study', etc.
    });
  },

  // Contact form tracking
  trackContactFormSubmit: (formType: string = 'contact') => {
    geolocationService.trackEventWithGeo('Contact Form Submit', { 
      form_type: formType 
    });
  },

  trackContactFormStart: () => {
    geolocationService.trackEventWithGeo('Contact Form Started');
  },

  // Resume/CV tracking
  trackResumeDownload: (source: string) => {
    geolocationService.trackEventWithGeo('Resume Downloaded', { 
      source: source // 'header', 'about-page', 'footer', etc.
    });
  },

  // Social media tracking
  trackSocialClick: (platform: string, location: string) => {
    geolocationService.trackEventWithGeo('Social Link Clicked', { 
      platform: platform, // 'linkedin', 'github', 'twitter', etc.
      location: location   // 'header', 'footer', 'about-page', etc.
    });
  },

  // Case study tracking
  trackCaseStudyView: (caseStudyId: string) => {
    geolocationService.trackEventWithGeo('Case Study Viewed', { 
      case_study: caseStudyId 
    });
  },

  trackCaseStudyNavigation: (direction: 'next' | 'previous', currentStudy: string) => {
    geolocationService.trackEventWithGeo('Case Study Navigation', { 
      direction: direction,
      current_study: currentStudy 
    });
  },

  // Engagement tracking
  trackScrollDepth: (depth: number, page: string) => {
    geolocationService.trackEventWithGeo('Scroll Depth', { 
      depth_percent: depth,
      page: page 
    });
  },

  trackTimeOnPage: (timeInSeconds: number, page: string) => {
    geolocationService.trackEventWithGeo('Time on Page', { 
      time_seconds: timeInSeconds,
      page: page 
    });
  },

  // External link tracking
  trackExternalLink: (url: string, linkText: string, location: string) => {
    geolocationService.trackEventWithGeo('External Link Clicked', { 
      url: url,
      link_text: linkText,
      location: location 
    });
  },

  // New geolocation-specific analytics methods
  getVisitorLocation: () => {
    return geolocationService.getFormattedLocation();
  },

  getGeolocationData: () => {
    return geolocationService.getGeolocationData();
  },

  // Track when geolocation is successfully captured
  trackGeolocationSuccess: () => {
    const geoData = geolocationService.getGeolocationData();
    if (geoData) {
      geolocationService.trackEventWithGeo('Geolocation Success', {
        location: geolocationService.getFormattedLocation(),
        has_precise_location: !!(geoData.latitude && geoData.longitude)
      });
    }
  }
};

// Hook for automatic page view tracking
export const usePageTracking = (pageName: string) => {
  useEffect(() => {
    analytics.trackPageView(pageName);
  }, [pageName]);
};

// Hook for geolocation tracking initialization
export const useGeolocationTracking = () => {
  useEffect(() => {
    const checkAndTrackGeolocation = async () => {
      // Wait a bit for geolocation service to initialize
      setTimeout(() => {
        const geoData = geolocationService.getGeolocationData();
        if (geoData) {
          analytics.trackGeolocationSuccess();
          
          // Debug log in development
          if (import.meta.env.DEV) {
            console.log('🌍 Visitor location captured:', {
              location: geolocationService.getFormattedLocation(),
              city: geoData.city,
              country: geoData.country,
              region: geoData.region
            });
          }
        }
      }, 2000); // Give geolocation service time to initialize
    };

    checkAndTrackGeolocation();
  }, []);
};

// Enhanced scroll depth tracking hook with geolocation
export const useScrollTracking = (pageName: string) => {
  useEffect(() => {
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        analytics.trackScrollDepth(scrollPercent, pageName);
      }
    };

    window.addEventListener('scroll', trackScroll);
    return () => window.removeEventListener('scroll', trackScroll);
  }, [pageName]);
}; 