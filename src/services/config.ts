export type AppConfig = {
  cloudbaseEnvId: string
  cloudbaseRegion: string
  adminEmails: string[]
  forceMock: boolean
}

const splitEmails = (value: string | undefined) =>
  (value ?? '')
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean)

export const config: AppConfig = {
  cloudbaseEnvId: import.meta.env.VITE_CLOUDBASE_ENV_ID ?? '',
  cloudbaseRegion: import.meta.env.VITE_CLOUDBASE_REGION ?? 'ap-shanghai',
  adminEmails: splitEmails(import.meta.env.VITE_ADMIN_EMAILS),
  forceMock: import.meta.env.VITE_USE_MOCK === 'true',
}

export const shouldUseMock = () => config.forceMock || !config.cloudbaseEnvId

export const isAdminEmail = (email: string) =>
  config.adminEmails.includes(email.trim().toLowerCase())
