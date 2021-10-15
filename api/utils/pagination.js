"use strict";

import { Tasks } from "../models/index.js";
import { constants } from "../configs/configs.js";

export const paginationResponse = await Tasks.paginate(
  {},
  {
    offset: constants.PAGINATION_OFFSET,
    limit: constants.PAGINATION_LIMIT,
  }
);
