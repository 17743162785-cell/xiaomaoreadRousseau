import type { ReaderRepository } from '../types'
import { shouldUseMock } from './config'
import { createCloudBaseRepository } from './cloudbaseRepository'
import { createMockRepository } from './mockRepository'

let repository: ReaderRepository | null = null

export const getRepository = () => {
  repository ??= shouldUseMock() ? createMockRepository() : createCloudBaseRepository()
  return repository
}
