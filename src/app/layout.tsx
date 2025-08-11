 

import { Metadata } from 'next';

import LoadWS from './loadws';
const APP_NAME = "myOfflineApp";
const APP_DEFAULT_TITLE = "My Awesome myOfflineApp";
const APP_TITLE_TEMPLATE = "%s - myOfflineApp";
const APP_DESCRIPTION = "nextjs offline app can navigate to  dynamic routes";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  

  return <>
  <LoadWS/>
  {children}</>;
}
