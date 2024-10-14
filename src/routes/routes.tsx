import React, { ReactNode, useEffect } from 'react';
import { createBrowserRouter, useLocation } from 'react-router-dom';
import { DashboardLayout, GuestLayout } from '../layouts';
import {
  ClientAdminPage,
  Error400Page,
  Error403Page,
  Error404Page,
  Error500Page,
  Error503Page,
  ErrorPage,
  FmAccessPage,
  HomePage,
  SignInPage,
} from '../pages';

// Custom scroll restoration function
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    }); // Scroll to the top when the location changes
  }, [pathname]);

  return null; // This component doesn't render anything
};

type PageProps = {
  children: ReactNode;
};

// Create an HOC to wrap your route components with ScrollToTop
const PageWrapper = ({ children }: PageProps) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper children={<HomePage />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboards',
    element: <PageWrapper children={<DashboardLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: 'client-admin',
        element: <ClientAdminPage />,
      },
      {
        path: 'fm-access',
        element: <FmAccessPage />,
      },
    ],
  },
  {
    path: '/signin',
    errorElement: <ErrorPage />,
    element: <SignInPage />,
  },
  {
    path: '/signup',
    errorElement: <ErrorPage />,
    element: <SignInPage />,
  },
  {
    path: '/forgot-password',
    errorElement: <ErrorPage />,
    element: <SignInPage />,
  },
  {
    path: 'errors',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '400',
        element: <Error400Page />,
      },
      {
        path: '403',
        element: <Error403Page />,
      },
      {
        path: '404',
        element: <Error404Page />,
      },
      {
        path: '500',
        element: <Error500Page />,
      },
      {
        path: '503',
        element: <Error503Page />,
      },
    ],
  },
]);

export default router;
