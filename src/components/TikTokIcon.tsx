import React from 'react';

export const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.01 6.01 0 0 1-1.3-1.07v6.26a10.02 10.02 0 1 1-10.02-10.02c.41 0 .82.04 1.23.1v3.91a6.38 6.38 0 0 0-1.23-.12c-3.5 0-6.32 2.82-6.32 6.33a6.32 6.32 0 1 0 12.64 0V0l.02.02Z"/>
  </svg>
);
