import type { ReactNode } from 'react'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/contexts/auth-context'
import { DashboardLayout } from '@/layouts/dashboard-layout'
import { LandingPage } from '@/pages/landing'
import { LoginPage } from '@/pages/login'
import { SignupPage } from '@/pages/signup'
import { PasswordResetPage } from '@/pages/password-reset'
import { EmailVerifyPage } from '@/pages/email-verify'
import { DashboardOverviewPage } from '@/pages/dashboard-overview'
import { DashboardProjectsPage } from '@/pages/dashboard-projects'
import { DashboardUsersPage } from '@/pages/dashboard-users'
import { BoardPage } from '@/pages/board'
import { NodeDetailPage } from '@/pages/node-detail'
import { TemplatesPage } from '@/pages/templates'
import { ImportExportPage } from '@/pages/import-export'
import { SettingsPage } from '@/pages/settings'
import { AboutPage } from '@/pages/about'
import { AdminPage } from '@/pages/admin'
import { ProfilePage } from '@/pages/profile'
import { CheckoutPage } from '@/pages/checkout'
import { BillingPage } from '@/pages/billing'
import { PrivacyPage } from '@/pages/privacy'
import { TermsPage } from '@/pages/terms'
import { NotFoundPage } from '@/pages/not-found'
import { ServerErrorPage } from '@/pages/server-error'
import { DemoPage } from '@/pages/demo'

function ProtectedRoute(_props: { children?: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth()
  if (isLoading) return null
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}

function PublicOnlyRoute() {
  const { isAuthenticated, isLoading } = useAuth()
  if (isLoading) return null
  if (isAuthenticated) return <Navigate to="/dashboard" replace />
  return <Outlet />
}

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/demo', element: <DemoPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/help', element: <AboutPage /> },
  { path: '/404', element: <NotFoundPage /> },
  { path: '/500', element: <ServerErrorPage /> },
  {
    element: <PublicOnlyRoute />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/password-reset', element: <PasswordResetPage /> },
      { path: '/email-verify', element: <EmailVerifyPage /> },
    ],
  },
  {
    path: 'dashboard',
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <Navigate to="/dashboard/overview" replace /> },
      { path: 'overview', element: <DashboardOverviewPage /> },
      { path: 'projects', element: <DashboardProjectsPage /> },
      { path: 'users', element: <DashboardUsersPage /> },
      { path: 'board/new', element: <BoardPage /> },
      { path: 'board/:boardId', element: <BoardPage /> },
      { path: 'board/:boardId/node/:nodeId', element: <NodeDetailPage /> },
      { path: 'templates', element: <TemplatesPage /> },
      { path: 'import-export', element: <ImportExportPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'help', element: <AboutPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'billing', element: <BillingPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
