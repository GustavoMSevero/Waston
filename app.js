var myInstance = new watson.WhateverServiceV1({
  /* username, password, version, etc... */
  headers: {
    "X-Watson-Learning-Opt-Out": true
  }
});
console.log(myInstance);