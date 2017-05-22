using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcAngularSpa.Models
{
    public class CoffeeSpotModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public string WorkingHours { get; set; }
        public string FoundationDate { get; set; }
    }
}