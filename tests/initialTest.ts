import {tapOnRegisterButton} from '../ui-manager/helper';

describe('Application test', () => {
    it('should tap on button and open menu', async () => {
        await tapOnRegisterButton();
    });
});