export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_FOUND = 404,
  BAD_REQUEST = 402,
  FORBIBBEN = 403,
  UNAUTHORIZED = 401,
  CONFLICT = 400,
  NOT_ACCEPTABLE = 406,
  METHOD_NOT_ALLOWED = 405,
  BAD_GATEWAY = 502,
  GATEWAY_TIMEOUT = 504,
  INTERAL_SERVER_ERROR = 500,
  UNPROCESSEDABLE_IDENTITY = 422,
}

interface ErrorAging {
  name?: string;
  isOperational?: boolean;
  message: string;
  httpCode: HttpCode;
}

export class AppErrors extends Error {
  public readonly name: string;
  public readonly isOpeartional: boolean = true;
  public readonly httpCode: HttpCode;

  constructor(args: ErrorAging) {
    super(args.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.httpCode = args.httpCode;
    this.name = args.name || "Error";

    if (args.isOperational !== undefined) {
      this.isOpeartional = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}
