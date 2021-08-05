import reducer from './articleReducer';

import * as articleActions from './articleActions';
import * as articleThunks from './articleThunks';
import * as articleTypes from './articleTypes';
import * as articleAPI from './articleAPI';
import * as articleSelectors from './articleSelectors';

export { articleAPI, articleTypes, articleActions, articleThunks, articleSelectors };

export default reducer;