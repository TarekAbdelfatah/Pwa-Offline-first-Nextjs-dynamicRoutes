 
import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts',
   
  swDest: "public/sw.js",
  cacheOnNavigation: true,
  additionalPrecacheEntries: [{ url: "/offline", revision: '11' },
    { url: "/offlinedoc", revision: '12' }],
});

export default withSerwist({
  
});
