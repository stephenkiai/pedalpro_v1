let flashMessage = null;
let flashMessageType = null;

const showFlashMessage = (message, type) => {
  flashMessage = message;
  flashMessageType = type;

  // clear flash message after a few seconds
  setTimeout(clearFlashMessage, 10);
};

const clearFlashMessage = () => {
  flashMessage = null;
  flashMessageType = null;
};

export { showFlashMessage, flashMessage, flashMessageType };
