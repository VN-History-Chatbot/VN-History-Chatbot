import { useHref, useNavigate } from 'react-router-dom';
import AppRoutes from '../routes';
import { NextUIProvider } from '@nextui-org/react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/components/Error';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/libs/tanstack-query';

export default function AppProvider() {
  const navigate = useNavigate();
  return (
    <ErrorBoundary fallback={<Error />}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider navigate={navigate} useHref={useHref}>
          <main className="text-foreground bg-background">
            <AppRoutes />
          </main>
        </NextUIProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
