import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ShareMe_Backend',

  projectId: 'pttd5n7a',
  dataset: 'sharemeprod',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
