# Power BI Dashboard — E-commerce Funnel

## Dashboard pages
1. Funnel Overview: visits, views, cart, checkout, purchases, conversion, revenue.
2. Acquisition: source-level visits, purchases, conversion and revenue.

## DAX measures
Visits = SUM(Funnel[visits])
Purchases = SUM(Funnel[purchases])
Revenue = SUM(Funnel[revenue])
Purchase Conversion = DIVIDE([Purchases], [Visits])
Cart Rate = DIVIDE(SUM(Funnel[add_to_cart]), [Visits])

## Business insights
- 129.3K visits, 9,005 purchases and ₹27.02 lakh revenue.
- Overall visit-to-purchase conversion is 6.96%.
- Email converts at 16.37%, Organic at 8.24%, Paid Search at 8.01%.
- Social has 48.2K visits but only 2.80% conversion.
- Action: investigate Social landing-page/message fit while protecting Email performance.
