//
// Reference:
// https://developer.mozilla.org/ja/docs/Web/HTTP/Status
//

interface HTTPResponse {
  code: number;
  name: string;
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
