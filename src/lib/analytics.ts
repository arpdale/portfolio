import { track } from '@vercel/analytics';
import { useEffect } from 'react';

// Portfolio-specific analytics events
export const analytics = {
  // Navigation tracking
  trackPageView: (pageName: string, additionalData?: Record<string, any>) => {
    track('Page View', { 
      page: pageName,
      ...additionalData 
    });
  },

  // Project interaction tracking
  trackProjectView: (projectName: string, projectType?: string) => {
    track('Project Viewed', { 
      project: projectName,
      type: projectType || 'unknown'
    });
  },

  trackProjectClick: (projectName: string, source: string) => {
    track('Project Clicked', { 
      project: projectName,
      source: source // 'featured', 'work-page', 'case-study', etc.
    });
  },

  // Contact form tracking
  trackContactFormSubmit: (formType: string = 'contact') => {
    track('Contact Form Submit', { 
      form_type: formType 
    });
  },

  trackContactFormStart: () => {
    track('Contact Form Started');
  },

  // Resume/CV tracking
  trackResumeDownload: (source: string) => {
    track('Resume Downloaded', { 
      source: source // 'header', 'about-page', 'footer', etc.
    });
  },

  // Social media tracking
  trackSocialClick: (platform: string, location: string) => {
    track('Social Link Clicked', { 
      platform: platform, // 'linkedin', 'github', 'twitter', etc.
      location: location   // 'header', 'footer', 'about-page', etc.
    });
  },

  // Case study tracking
  trackCaseStudyView: (caseStudyId: string) => {
    track('Case Study Viewed', { 
      case_study: caseStudyId 
    });
  },

  trackCaseStudyNavigation: (direction: 'next' | 'previous', currentStudy: string) => {
    track('Case Study Navigation', { 
      direction: direction,
      current_study: currentStudy 
    });
  },

  // Engagement tracking
  trackScrollDepth: (depth: number, page: string) => {
    track('Scroll Depth', { 
      depth_percent: depth,
      page: page 
    });
  },

  trackTimeOnPage: (timeInSeconds: number, page: string) => {
    track('Time on Page', { 
      time_seconds: timeInSeconds,
      page: page 
    });
  },

  // External link tracking
  trackExternalLink: (url: string, linkText: string, location: string) => {
    track('External Link Clicked', { 
      url: url,
      link_text: linkText,
      location: location 
    });
  }
};

// Hook for automatic page view tracking
export const usePageTracking = (pageName: string) => {
  useEffect(() => {
    analytics.trackPageView(pageName);
  }, [pageName]);
};

// Scroll depth tracking hook
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