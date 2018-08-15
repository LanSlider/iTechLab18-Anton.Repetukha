using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APISum.Models;

namespace APISum.Services
{
    public class SumValuesService : ISumValuesService
    {
        public ResultModel SumValues(int value1, int value2)
        {       
            return new ResultModel
            {
                A = value1,
                B = value2,
                Sum = value1 + value2
            };
        }
    }
}
