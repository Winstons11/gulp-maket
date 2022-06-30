const el = document.querySelector('.tooltip__btn');
const tooltip = document.querySelector('.tooltip__txt');

import { createPopper, right } from "@popperjs/core";
createPopper(el, tooltip, {
  placement: "top-start",
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 10],
      },
    },
  ],
});
