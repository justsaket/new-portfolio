# Power BI Dashboard — Retail Sales

## Dashboard pages
1. Executive Overview: Revenue, Profit, Margin %, Units, monthly trend, profit by region, category contribution, slicers.
2. Product & Region: region × category matrix, product profitability, units vs revenue, drill-through.

## DAX measures
Revenue = SUM(RetailSales[sales])
Cost = SUM(RetailSales[cost])
Profit = [Revenue] - [Cost]
Margin % = DIVIDE([Profit], [Revenue])
Units = SUM(RetailSales[units])

## Business insights
- Revenue: ₹66.41 lakh; profit: ₹13.46 lakh; margin: 20.27%.
- South has the largest sample profit at ₹3.71 lakh; North is ₹3.60 lakh.
- Electronics generates ₹44.40 lakh revenue.
- West has the lowest regional profit at ₹2.72 lakh.
- Action: investigate West's product mix and pricing against stronger regions.
