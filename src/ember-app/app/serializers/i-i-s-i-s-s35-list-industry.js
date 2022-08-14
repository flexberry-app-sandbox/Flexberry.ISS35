import { Serializer as ListIndustrySerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-s-s35-list-industry';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ListIndustrySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
