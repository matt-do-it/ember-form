import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
  email: [validator('presence', true), validator('format', { type: 'email' })],
  message: validator('presence', true),
});

export default class ContactModel extends Model.extend(Validations) {
  @attr name;
  @attr email;
  @attr message;
}
