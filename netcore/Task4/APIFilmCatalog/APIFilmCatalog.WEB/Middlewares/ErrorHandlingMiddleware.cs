using System;
using System.Net;
using System.Threading.Tasks;
using APIFilmCatalog.WEB.Exceptions;
using APIFilmCatalog.WEB.Services;
using APIFilmCatalog.WEB.ViewModels;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace APIFilmCatalog.WEB.Middlewares
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
            catch (UserFriendlyException ex)
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

        private static Task HandleExceptionAsync(HttpContext context, UserFriendlyException exception)
        {
            var result = JsonConvert.SerializeObject(new ErrorJsonResult<Object>(exception.UserFriendlyMessage));
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            return context.Response.WriteAsync(result);
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var code = HttpStatusCode.InternalServerError; // 500 if unexpected          
            var result = JsonConvert.SerializeObject(new ErrorJsonResult<Object>(exception.Message));
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
            return context.Response.WriteAsync(result);
        }
    }
}