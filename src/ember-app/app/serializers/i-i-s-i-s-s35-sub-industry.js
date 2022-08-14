import { Serializer as SubIndustrySerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-s-s35-sub-industry';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SubIndustrySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
