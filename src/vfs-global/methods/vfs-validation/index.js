import Ajv from 'ajv';
import getters from './getters';
import {
  VFS_EVENT_MODEL_VALIDATE,
} from '../../../constants';

const vfsValidation = {
  vfsValidationInitialize() {
    this.ajv = new Ajv();

    // Check if validation is enabled and set to run on load
    if (this.vfsOptions.validate && this.vfsOptions.validateOnLoad) {
      this.vfsBus.$emit(VFS_EVENT_MODEL_VALIDATE);
    }
  },
  ...getters,
};

export default vfsValidation;
