﻿using Microsoft.Extensions.Logging;
using WebApi.Controllers;
using WebAPI.MockFactory.Tests.Factory.Interfaces;

namespace WebAPI.MockFactory.Tests.Factory
{
    public class ControllerFactory : IControllerFactory
    {
        private readonly IServiceFactory _serviceFactory;
        private readonly ILoggerFactory _loggerFactory;

        public ControllerFactory(IServiceFactory serviceFactory, ILoggerFactory loggerFactory)
        {
            _serviceFactory = serviceFactory;
            _loggerFactory = loggerFactory;
        }

        public ProductsController CreateProductsController()
        {
            return null;
        }
    }
}
