using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            return await GetDataAsync("");
        }

        public async Task<ShipData> GetDataAsync(string requestUrl = null)
        {           
            var request = new RestRequest(requestUrl, Method.GET);
            var starShipsData = new ShipData();

            starShipsData = await _client.GetTaskAsync<ShipData>(request);
            if (starShipsData == null)
            {
                throw new BussinessException("Invalid data source");
            }  
            
            return starShipsData;
        }

        public async Task<ShipData> GetAllDataAsync()
        {
            var shipDataNext = await GetDataAsync("");

            var starshipsData = shipDataNext;

            while (shipDataNext.Next != null)
            {
                shipDataNext = await GetDataAsync(GetRestRequest(shipDataNext.Next));         
                starshipsData.Results.AddRange(shipDataNext.Results);
            }

            return starshipsData;
        }

        private string GetRestRequest(string url)
        {
            return url.Remove(0, _dataSource.Length + 1);
        }
    }
}