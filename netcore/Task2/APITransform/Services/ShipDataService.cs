using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using APITransform.Exeptions;
using APITransform.Models;
using AutoMapper;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RestSharp;

namespace APITransform.Services
{
    public class ShipDataService : IShipDataService
    {
        private readonly string _dataSource;
        private readonly RestClient _client;

        public ShipDataService()
        {
            _dataSource = "https://swapi.co/api/starships";
            _client = new RestClient(new Uri(_dataSource));
        }

        public ShipData GetData()
        {       
            var request = new RestRequest(Method.GET);
            var starShipsData = new ShipData();

            starShipsData = _client.Execute<ShipData>(request).Data;
            if (starShipsData == null)
            {
                throw new BussinessException("Invalid data source");
            }
            
            return starShipsData;
        }

        public async Task<ShipData> GetDataAsync()
        {
            return await GetDataAsync("1");
        }

        public async Task<ShipData> GetAllDataAsync()
        {
            var shipDataNext = await GetDataAsync("1");

            var starshipsData = shipDataNext;
            Uri requestUri = null;

            while (shipDataNext.Next != null)
            {
                requestUri = new Uri(shipDataNext.Next);
                shipDataNext = await GetDataAsync(GetPageRequest(requestUri.ToString()));         
                starshipsData.Results.AddRange(shipDataNext.Results);
            }

            return starshipsData;
        }

        private async Task<ShipData> GetDataAsync(string queryPageForRequest)
        {
            var request = new RestRequest("?page=" + queryPageForRequest, Method.GET);
            var starShipsData = new ShipData();

            starShipsData = await _client.GetTaskAsync<ShipData>(request);
            if (starShipsData == null)
            {
                throw new BussinessException("Invalid data source");
            }

            return starShipsData;
        }

        private string GetPageRequest(string url)
        {
            var pageRequest = new Uri(url);
            return HttpUtility.ParseQueryString(pageRequest.Query).Get("page");
        }
    }
}