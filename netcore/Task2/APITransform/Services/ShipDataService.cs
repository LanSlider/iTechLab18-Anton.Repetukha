using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public List<Starship> AddIndexToList(List<Starship> list, int index = 0)
        {
            for (int i = index; i < list.Count(); i++)
            {
                list[i].Index = i + 1;
            }

            return list;
        }

        public Starships GetData()
        {       
            var request = new RestRequest(Method.GET);
            Starships starShipsList = new Starships();

            try
            {
                starShipsList = _client.Execute<Starships>(request).Data;
                if (starShipsList == null)
                {
                    throw new ApplicationException("Error: Invalid data source");
                }
            }
            catch { }

            AddIndexToList(starShipsList.Results);

            return starShipsList;
        }

        public async Task<Starships> GetDataAsync()
        {           
            var request = new RestRequest(Method.GET);
            Starships starShipsList = new Starships();

            try
            {
                starShipsList = await _client.GetTaskAsync<Starships>(request);
                if (starShipsList == null)
                {
                    throw new ApplicationException("Error: Invalid data source");
                }
            }
            catch { }

            AddIndexToList(starShipsList.Results);

            return starShipsList;
        }

        public async Task<ShipData> GetAllDataAsync()
        {
            var request = new RestRequest(Method.GET);
            ShipData shipDataNext = new ShipData();

            try
            {
                shipDataNext = await _client.GetTaskAsync<ShipData>(request);
                if (shipDataNext == null)
                {
                    throw new ApplicationException("Error: Invalid data source");
                }
            }
            catch { }

            ShipData starshipsList = shipDataNext;

            while (shipDataNext.Next != null)
            {
                _client.BaseUrl = new Uri(shipDataNext.Next);
                shipDataNext = await _client.GetTaskAsync<ShipData>(request);              
                starshipsList.Results.AddRange(shipDataNext.Results);
            }

            AddIndexToList(starshipsList.Results);

            return starshipsList;
        }
    }
}