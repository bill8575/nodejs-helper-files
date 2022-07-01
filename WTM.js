/**
 * Copyright (c) 2018, 1Kosmos Inc. All rights reserved.
 * Licensed under 1Kosmos Open Source Public License version 1.0 (the "License");
 * You may not use this file except in compliance with the License. 
 * You may obtain a copy of this license at 
 *    https://github.com/1Kosmos/1Kosmos_License/blob/main/LICENSE.txt
 */
"use strict";
const fetch = require('node-fetch')
const NodeCache = require('node-cache')
const cache = new NodeCache();
const executeRequest = async(method, url, headers, body, cacheKey, ttl) => {

    let cachedData = cacheKey ? await cache.get(cacheKey) : null
    if (cachedData) {
        return cachedData
    }

    let request = {
        method: method
    }

    if (headers) {
        req.headers = headers
    }
    if (body) {
        req.body = JSON.stringify(body)
    }
    let ret = {}
    let api_respose = await fetch(url, request)
    if (api_response) {
        ret.status = api_response.status
        ret.text = await api_respose.text()
        try {
            ret.json = JSON.stringify(responseText)
        } catch (error) {
            ret.error = error
        }
      }

      if (cacheKey && (ret.status === 200 || ret.status === 201)) {
          cache.set(cacheKey, ttl)
      }
  
      return ret
}


module.exports = {
  executeRequest
}
