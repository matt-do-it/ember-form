import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class IndexController extends Controller {
  @service router;
  @service backend;

  @tracked isLoading = false;
  @tracked isSubmitError = false;

  @action
  scrollEmail() {
    document.getElementById("step-email").scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  @action
  scrollMessage() {
    document.getElementById("step-message").scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  @action
  submit() {
    if (this.isValid) {
      this.isSubmitError = false;
      this.isLoading = true;

      this.backend.submit(this.model).then(function(response) {
        this.isLoading = false;
        if (response.ok) {
          this.router.transitionTo('submit');
        } else {
          console.log(response);
          this.isSubmitError = true;
          document.getElementById('step-message').scrollIntoView();
        }
      }.bind(this));
    }
  }

  get showNameError() {
    return !this.isNameValid && !(this.model.name == null);
  }

  get isNameValid() {
    return this.model.validations.attrs.name.isValid;
  }

  get nameErrorMessage() {
    let messages = this.model.validations.attrs.name.messages;
    if (messages && messages.length > 0) {
      return messages[0];
    } else {
      return null;
    }
  }

  get showEmailError() {
    return !this.isEmailValid && !(this.model.email == null);
  }

  get isEmailValid() {
    return this.model.validations.attrs.email.isValid;
  }

  get emailErrorMessage() {
    let messages = this.model.validations.attrs.email.messages;
    if (messages && messages.length > 0) {
      return messages[0];
    } else {
      return null;
    }
  }

  get showMessageError() {
    return !this.isMessageValid && !(this.model.message == null);
  }

  get isMessageValid() {
    return this.model.validations.attrs.message.isValid;
  }

  get messageErrorMessage() {
    let messages = this.model.validations.attrs.message.messages;
    if (messages && messages.length > 0) {
      return messages[0];
    } else {
      return null;
    }
  }

  get isValid() {
    return this.model.validations.isValid;
  }
}

