//
// Reference:
// https://developer.mozilla.org/ja/docs/Web/HTTP/Status
//

interface HTTPResponse {
  code: number;
  name: string;
}

export function fromCode(code: number): HTTPResponse {
  switch (code) {
    // Informational Response
    case 100:
      return CONTINUE;
    case 101:
      return SWITCHING_PROTOCOL;
    case 102:
      return PROCESSING;
    case 103:
      return EARLY_HINTS;

    // Success Response
    case 200:
      return OK;
    case 201:
      return CREATED;
    case 202:
      return ACCEPTED;
    case 203:
      return NON_AUTHORITATIVE_INFORMATION;
    case 204:
      return NO_CONTENT;
    case 205:
      return RESET_CONTENT;
    case 206:
      return PARTIAL_CONTENT;
    case 207:
      return MULTI_STATUS;
    case 208:
      return ALREADY_REPORTED;
    case 226:
      return IM_USED;
    default:
      return BAD_REQUEST;

    // Redirect Message
    case 300:
      return MULTIPLE_CHOICE;
    case 301:
      return MOVED_PERMANENTLY;
    case 302:
      return FOUND;
    case 303:
      return SEE_OTHER;
    case 304:
      return NOT_MODIFIED;
    case 305:
      return USE_PROXY;
    case 306:
      return UNUSED;
    case 307:
      return TEMPORARY_REDIRECT;
    case 308:
      return PERMANENT_REDIRECT;

    // Client Error Response
    case 400:
      return BAD_REQUEST;
    case 401:
      return UNAUTHORIZED;
    case 402:
      return PAYMENT_REQUIRED;
    case 403:
      return FORBIDDEN;
    case 405:
      return METHOD_NOT_ALLOWED;
    case 406:
      return NOT_ACCEPTABLE;
    case 407:
      return PROXY_AUTHENTICATION_REQUIRED;
    case 408:
      return REQUEST_TIMEOUT;
    case 409:
      return CONFLICT;
    case 410:
      return GONE;
    case 411:
      return LENGTH_REQUIRED;
    case 412:
      return PRECONDITION_FAILED;
    case 413:
      return PAYLOAD_TOO_LARGE;
    case 414:
      return URI_TOO_LONG;
    case 415:
      return UNSUPPORTED_MEDIA_TYPE;
    case 416:
      return RANGE_NOT_SATISFIABLE;
    case 417:
      return EXPECTATION_FAILED;
    case 418:
      return IM_A_TEAPOT;
    case 421:
      return MISDIRECTED_REQUEST;
    case 422:
      return UNSUPPORTED_MEDIA_TYPE;
    case 423:
      return LOCKED;
    case 424:
      return FAILED_DEPENDENCY;
    case 425:
      return TOO_EARLY;
    case 426:
      return UPGRADE_REQUIRED;
    case 428:
      return PRECONDITION_REQUIRED;
    case 429:
      return TOO_MANY_REQUESTS;
    case 431:
      return REQUEST_HEADER_FIELDS_TOO_LARGE;
    case 451:
      return UNAVAILABLE_FOR_LEGAL_REASONS;

    // Server error response
    case 500:
      return INTERNAL_SERVER_ERROR;
    case 501:
      return NOT_IMPLEMENTED;
    case 502:
      return BAD_GATEWAY;
    case 503:
      return SERVICE_UNAVAILABLE;
    case 504:
      return GATEWAY_TIMEOUT;
    case 505:
      return HTTP_VERSION_NOT_SUPPORTED;
    case 506:
      return VARIANT_ALSO_NEGOTIATES;
    case 507:
      return INSUFFICIENT_STORAGE;
    case 508:
      return LOOP_DETECTED;
    case 510:
      return NOT_EXTENDED;
    case 511:
      return NETWORK_AUTHENTICATION_REQUIRED;
  }
}

//
// Informational Response
//

export const CONTINUE: HTTPResponse = {
  code: 100,
  name: "Continue",
};

export const SWITCHING_PROTOCOL: HTTPResponse = {
  code: 101,
  name: "Switching Protocol",
};

export const PROCESSING: HTTPResponse = {
  code: 102,
  name: "Processing",
};

export const EARLY_HINTS: HTTPResponse = {
  code: 103,
  name: "Early Hints",
};

//
// Success Response
//

export const OK: HTTPResponse = {
  code: 200,
  name: "OK",
};

export const CREATED: HTTPResponse = {
  code: 201,
  name: "Created",
};

export const ACCEPTED: HTTPResponse = {
  code: 202,
  name: "Accepted",
};

export const NON_AUTHORITATIVE_INFORMATION: HTTPResponse = {
  code: 203,
  name: "Non Authoritative Information",
};

export const NO_CONTENT: HTTPResponse = {
  code: 204,
  name: "No Content",
};

export const RESET_CONTENT: HTTPResponse = {
  code: 205,
  name: "Reset Content",
};

export const PARTIAL_CONTENT: HTTPResponse = {
  code: 206,
  name: "Partial Content",
};

export const MULTI_STATUS: HTTPResponse = {
  code: 207,
  name: "Multi Status",
};

export const ALREADY_REPORTED: HTTPResponse = {
  code: 208,
  name: "Already Reported",
};

export const IM_USED: HTTPResponse = {
  code: 226,
  name: "IM Used",
};

//
// Redirect Message
//

export const MULTIPLE_CHOICE: HTTPResponse = {
  code: 300,
  name: "Multiple Choice",
};

export const MOVED_PERMANENTLY: HTTPResponse = {
  code: 301,
  name: "Moved Permanently",
};

export const FOUND: HTTPResponse = {
  code: 302,
  name: "Found",
};

export const SEE_OTHER: HTTPResponse = {
  code: 303,
  name: "See Other",
};

export const NOT_MODIFIED: HTTPResponse = {
  code: 304,
  name: "Not Modified",
};

export const USE_PROXY: HTTPResponse = {
  code: 305,
  name: "Use Proxy",
};

export const UNUSED: HTTPResponse = {
  code: 306,
  name: "unused",
};

export const TEMPORARY_REDIRECT: HTTPResponse = {
  code: 307,
  name: "Temporary Redirect",
};

export const PERMANENT_REDIRECT: HTTPResponse = {
  code: 308,
  name: "Permanent Redirect",
};

//
// Client Error Response
//

export const BAD_REQUEST: HTTPResponse = {
  code: 400,
  name: "Bad Request",
};

export const UNAUTHORIZED: HTTPResponse = {
  code: 401,
  name: "Unauthorized",
};

export const PAYMENT_REQUIRED: HTTPResponse = {
  code: 402,
  name: "Payment Required",
};

export const FORBIDDEN: HTTPResponse = {
  code: 403,
  name: "Forbidden",
};

export const NOT_FOUND: HTTPResponse = {
  code: 404,
  name: "Not Found",
};

export const METHOD_NOT_ALLOWED: HTTPResponse = {
  code: 405,
  name: "Method Not Allowed",
};

export const NOT_ACCEPTABLE: HTTPResponse = {
  code: 406,
  name: "Not Acceptable",
};

export const PROXY_AUTHENTICATION_REQUIRED: HTTPResponse = {
  code: 407,
  name: "Proxy Authentication Required",
};

export const REQUEST_TIMEOUT: HTTPResponse = {
  code: 408,
  name: "Request Timeout",
};

export const CONFLICT: HTTPResponse = {
  code: 409,
  name: "Conflict",
};

export const GONE: HTTPResponse = {
  code: 410,
  name: "Gone",
};

export const LENGTH_REQUIRED: HTTPResponse = {
  code: 411,
  name: "Length Required",
};

export const PRECONDITION_FAILED: HTTPResponse = {
  code: 412,
  name: "Precondition Failed",
};

export const PAYLOAD_TOO_LARGE: HTTPResponse = {
  code: 413,
  name: "Payload Too Large",
};

export const URI_TOO_LONG: HTTPResponse = {
  code: 414,
  name: "URI Too Long",
};

export const UNSUPPORTED_MEDIA_TYPE: HTTPResponse = {
  code: 415,
  name: "Unsupported Media Type",
};

export const RANGE_NOT_SATISFIABLE: HTTPResponse = {
  code: 416,
  name: "Range Not Satisfiable",
};

export const EXPECTATION_FAILED: HTTPResponse = {
  code: 417,
  name: "Expectation Failed",
};

export const IM_A_TEAPOT: HTTPResponse = {
  code: 418,
  name: "I'm a teapot",
};

export const MISDIRECTED_REQUEST: HTTPResponse = {
  code: 421,
  name: "Misdirected Request",
};

export const UNPROCESSABLE_ENTITY: HTTPResponse = {
  code: 422,
  name: "Unprocessable Entity",
};

export const LOCKED: HTTPResponse = {
  code: 423,
  name: "Locked",
};

export const FAILED_DEPENDENCY: HTTPResponse = {
  code: 424,
  name: "Failed Dependency",
};

export const TOO_EARLY: HTTPResponse = {
  code: 425,
  name: "Too Early",
};

export const UPGRADE_REQUIRED: HTTPResponse = {
  code: 426,
  name: "Upgrade Required",
};

export const PRECONDITION_REQUIRED: HTTPResponse = {
  code: 428,
  name: "Precondition Required",
};

export const TOO_MANY_REQUESTS: HTTPResponse = {
  code: 429,
  name: "Too Many Requests",
};

export const REQUEST_HEADER_FIELDS_TOO_LARGE: HTTPResponse = {
  code: 431,
  name: "Request Header Field Too Large",
};

export const UNAVAILABLE_FOR_LEGAL_REASONS: HTTPResponse = {
  code: 451,
  name: "Unavailable For Legal Reasons",
};

//
// Server Error Response
//
export const INTERNAL_SERVER_ERROR: HTTPResponse = {
  code: 500,
  name: "Internal Server Error",
};

export const NOT_IMPLEMENTED: HTTPResponse = {
  code: 501,
  name: "Not Implemented",
};

export const BAD_GATEWAY: HTTPResponse = {
  code: 502,
  name: "Bad Gateway",
};

export const SERVICE_UNAVAILABLE: HTTPResponse = {
  code: 503,
  name: "Service Unavailable",
};

export const GATEWAY_TIMEOUT: HTTPResponse = {
  code: 504,
  name: "Gateway Timeout",
};

export const HTTP_VERSION_NOT_SUPPORTED: HTTPResponse = {
  code: 505,
  name: "HTTP Version Not Supported",
};

export const VARIANT_ALSO_NEGOTIATES: HTTPResponse = {
  code: 506,
  name: "Variant Also Negotiates",
};

export const INSUFFICIENT_STORAGE: HTTPResponse = {
  code: 507,
  name: "Insufficient Storage",
};

export const LOOP_DETECTED: HTTPResponse = {
  code: 508,
  name: "Loop Detected",
};

export const NOT_EXTENDED: HTTPResponse = {
  code: 510,
  name: "Not Extended",
};

export const NETWORK_AUTHENTICATION_REQUIRED: HTTPResponse = {
  code: 511,
  name: "Network Authentication Required",
};
