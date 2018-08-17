using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using APICrud.Exceptions;
using APICrud.Models;
using APICrud.Services;
using APITransform.ViewModels;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace APICrud.Middlewares
{
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate next;
        private readonly ILoggerService _logger;

        public ErrorHandlingMiddleware(RequestDelegate next, ILoggerService logger)
        {
            this.next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (BussinessException ex)
            {
                _logger.Error(ex);
                await HandleExceptionAsync(context, ex);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                await HandleExceptionAsync(context, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, BussinessException exception)
        {
            var result = JsonConvert.SerializeObject(new ErrorJsonResult<List<Film>>(exception.UserFriendlyMessage));
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            return context.Response.WriteAsync(result);
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var code = HttpStatusCode.InternalServerError; // 500 if unexpected
            var result = JsonConvert.SerializeObject(new ErrorJsonResult<List<Film>>(exception.Message));
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
            return context.Response.WriteAsync(result);
        }
    }
}
