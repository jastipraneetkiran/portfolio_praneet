import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './schemaTypes/pageInfo'
import experience from './schemaTypes/experience'
import project from './schemaTypes/project'
import skill from './schemaTypes/skill'
import social from './schemaTypes/social'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, experience, project, skill,social],
}
