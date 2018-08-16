using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Services;
using log4net;
using Microsoft.AspNetCore.Mvc.Filters;

namespace APICrud.Filters
{
    public class LogActionFilter : ActionFilterAttribute, IActionFilter
    {
        private readonly ILoggerService _logger;

        public LogActionFilter(ILoggerService logger)
        {
            _logger = logger;
        }

        public override void OnActionExecuted(ActionExecutedContext context)
        {
            var logMessage =
                "RequestType: " + context.HttpContext.Request.Method.ToString() + 
                " ActionName: " + context.ActionDescriptor.DisplayName.ToString();

            _logger.Info(logMessage);
        }
    }
}
