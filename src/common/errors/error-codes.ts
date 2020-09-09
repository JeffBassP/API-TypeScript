const errorCtx = 'my-app';

const errorCodes = Object.freeze({
  generic: {
    INTERNAL_SERVER_ERROR: `${errorCtx}GNC0000`,
    NOT_FOUND: `${errorCtx}GNC0001`,
    UNPROCESSABLE_ENTITY: `${errorCtx}GNC0002`,
    UNAUTHORIZED: `${errorCtx}GNC0003`,
    FORBIDDEN: `${errorCtx}GNC0004`
  }
});

export default errorCodes;

