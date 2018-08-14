using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APISum.Models;

namespace APISum.Services
{
    public class SumValuesService : ISumValuesService
    {
        public ResultModel SumValues(ValueModel valueModel)
        {       
            return new ResultModel
            {
                A = (int)valueModel.Value1,
                B = (int)valueModel.Value2,
                Sum = (int)(valueModel.Value1 + valueModel.Value2)
            };
        }
    }
}
