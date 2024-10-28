import { type SchemaTypeDefinition } from 'sanity'
import {productType} from './product'
import { categoryType } from './category'
import { heroImagetype } from './heroImages'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType,categoryType,heroImagetype],
}
