import '@testing-library/jest-dom/vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

describe('Rousseau reader', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders the reading experience', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByRole('heading', { name: '卢梭思想交互式共读' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /人生而自由/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '爱弥儿' })).toBeInTheDocument()
    expect(await screen.findByText(/人是生而自由的，可他到处都被束缚着/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '政治经济' }))

    expect(screen.getByRole('button', { name: /《政治经济论》的原文入口/ })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /人生而自由/ })).not.toBeInTheDocument()
  })

  it('supports mock login, paragraph highlight, and comments', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('邮箱登录'), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: /发送/ }))

    expect(await screen.findByText('reader')).toBeInTheDocument()

    const firstHighlightButton = document.querySelector<HTMLButtonElement>(
      '#opening-problem button[title="高亮这段"]',
    )
    expect(firstHighlightButton).not.toBeNull()
    await user.click(firstHighlightButton!)
    await waitFor(() => expect(screen.getByRole('button', { name: '已高亮' })).toBeInTheDocument())

    await user.type(
      screen.getByPlaceholderText('写下你对此段的理解、疑问或反驳。'),
      '自由在这里并不是任性，而是共同体中的自我规定。',
    )
    await user.click(screen.getByRole('button', { name: /发表评论/ }))

    expect(await screen.findByText('自由在这里并不是任性，而是共同体中的自我规定。')).toBeInTheDocument()
  })
})
