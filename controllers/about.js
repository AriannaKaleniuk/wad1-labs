'use strict';

import logger from "../utils/logger.js";
import { getAppInfo } from "../models/stevie-store.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    const employee = getAppInfo();
    const viewData = {
      title: "About the Playlist App",
      employees: employee
    };
    response.render("about", viewData);
  },
};

export default about;
