var salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };
  
  var companySalesData = [
    {
      name: "Telus",
      province: "BC",
      sales: [ 100, 200, 400 ]
    },
    {
      name: "Bombardier",
      province: "AB",
      sales: [ 80, 20, 10, 100, 90, 500 ]
    },
    {
      name: "Telus",
      province: "SK",
      sales: [ 500, 100 ]
    }
  ];

function saleCalc(company, salesData, taxRates){
    // take all arrays for the company and return the sum of sales for each company

    var sumSales = 0;
    var sumTax = 0;
    salesData.forEach(function(dataPiece){
        if (dataPiece.name === company){
            dataPiece.sales.forEach(function(sale){
                sumSales += sale;
                sumTax += (sale * taxRates[dataPiece.province]);
            });
        }
    });
    return {"totalSales" : sumSales , "totalTaxes": sumTax};
}


function calculateSalesTax(salesData, taxRates) {
    var companyNames = [];
    var compSales = {};
    for(var company in salesData){
        if (!companyNames.includes(salesData[company].name)){
            companyNames.push(salesData[company].name);
        }
    }
    companyNames.forEach(function(company){
        compSales[company] = saleCalc(company, salesData, taxRates);
    });
   return(compSales);
}

console.log(calculateSalesTax(companySalesData,salesTaxRates));
  

// var results = calculateSalesTax(companySalesData, salesTaxRates);
  
  /* Expected Results:
  {
    Telus: {
      totalSales: 1300
      totalTaxes: 144
    },
    Bombardier: {
      totalSales: 800,
      totalTaxes: 40
    }
  }
  */
  