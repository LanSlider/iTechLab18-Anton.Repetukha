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
        private readonly IMapper _mapper;
        private readonly string _dataSource;

        public ShipDataService(IConfiguration config, IMapper mapper)
        {
            _dataSource = config["ShipsDataURL"];
            _mapper = mapper;
        }

        public List<Starship> AddIndexToList(List<Starship> list, int index = 0)
        {
            for (int i = index; i < list.Count(); i++)
            {
                list[i].index = i + 1;
            }

            return list;
        }

        public Starships GetData()
        {
            var client = new RestClient(new Uri(_dataSource));
            var request = new RestRequest(Method.GET);
            var response = client.Execute(request);

            var starShipsList = JsonConvert.DeserializeObject<Starships>(response.Content);

            AddIndexToList(starShipsList.results);

            return starShipsList;
        }

        public async Task<Starships> GetDataAsync()
        {
            var client = new RestClient(new Uri(_dataSource));
            var request = new RestRequest(Method.GET);
            var starShipsList = await client.GetTaskAsync<Starships>(request);

            AddIndexToList(starShipsList.results);

            return starShipsList;
        }

        public async Task<Starships> GetAllDataAsync()
        {
            var client = new RestClient(new Uri(_dataSource));
            var request = new RestRequest(Method.GET);
            var shipDataNext = await client.GetTaskAsync<ShipData>(request);

            Starships starshipsList = new Starships();

            starshipsList = _mapper.Map<ShipData,Starships>(shipDataNext);

            while (shipDataNext.next != null)
            {
                client = new RestClient(new Uri(shipDataNext.next));
                shipDataNext = await client.GetTaskAsync<ShipData>(request);              
                starshipsList.results.AddRange(shipDataNext.results);
            }

            AddIndexToList(starshipsList.results);

            return starshipsList;
        }
    }
}