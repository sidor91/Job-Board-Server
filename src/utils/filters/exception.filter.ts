import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { Response } from 'express';

@Catch()
export class CustomExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof QueryFailedError) {
      let errorMessage = 'Database error';
      if ((exception as any).code === 'SQLITE_CONSTRAINT') {
        errorMessage = 'Duplicate entry found';
      }

      response.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        statusCode: HttpStatus.BAD_REQUEST,
        message: errorMessage,
      });
    } else if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const message = exception.message;

      response.status(status).json({
        success: false,
        statusCode: status,
        message: message,
      });
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal server error',
      });
    }
  }
}
