import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: [
    validator('presence', true),
    validator('format', { type: 'email' }),
  ],
  password: validator('presence', true),
});

export default class LoginModel extends Model.extend(Validations) {
  @attr username;
  @attr password;
}
