import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log("Intercepting the request...")
    return handler.handle().pipe(
      map(data => {
        console.log("Intercepting the response...")
        // Data can be modified here.
        return data;
      })
    );
  }
}