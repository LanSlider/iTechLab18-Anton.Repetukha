using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APISum.Models;

namespace APISum.Services
{
    public interface ISumValuesService
    {
        ResultModel SumValues(ValueModel valueModel);
    }
}
