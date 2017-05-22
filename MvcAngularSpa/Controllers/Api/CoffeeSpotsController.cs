using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MvcAngularSpa.Models;

namespace MvcAngularSpa.api
{
    [RoutePrefix("api/coffee-spots")]
    public class CoffeeSpotsController : ApiController
    {
        private List<CoffeeSpotModel> _coffeeSpots;

        public CoffeeSpotsController()
        {
            _coffeeSpots = new List<CoffeeSpotModel>
            {
                new CoffeeSpotModel
                {
                    Id = 1,
                    Name = "coffee spot 1",
                    Address = "street 1",
                    Description = "desc 1",
                    WorkingHours = "7-15h",
                    FoundationDate = DateTime.Now.ToString("dd-mm-yyyy")
                },
                new CoffeeSpotModel
                {
                    Id = 2,
                    Name = "coffee spot 2",
                    Address = "street 2",
                    Description = "desc 2",
                    WorkingHours = "7-15h",
                    FoundationDate = DateTime.Now.AddDays(-1).ToString("dd-mm-yyyy")
                },
                new CoffeeSpotModel
                {
                    Id = 3,
                    Name = "coffee spot 3",
                    Address = "street 3",
                    Description = "desc 3",
                    WorkingHours = "7-15h",
                    FoundationDate = DateTime.Now.AddDays(-2).ToString("dd-mm-yyyy")
                }
            };
        }

        [HttpGet]
        public IEnumerable<CoffeeSpotModel> Get()
        {
            return _coffeeSpots;
        }

        [HttpGet]
        public CoffeeSpotModel Get(int id)
        {
            return _coffeeSpots.Find(x => x.Id == id);
        }

        [HttpPost]
        public CoffeeSpotModel Post([FromBody]CoffeeSpotModel coffeeSpotToAdd)
        {
            coffeeSpotToAdd.Id = new Random().Next(100);
            _coffeeSpots.Add(coffeeSpotToAdd);
            return coffeeSpotToAdd;
        }

        [HttpPut]
        public void Put(int id, [FromBody]CoffeeSpotModel value)
        {
            //do an update
        }

        [HttpDelete]
        public void Delete(int id)
        {
        }
    }
}
