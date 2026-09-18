# Power BI Dashboard — Financial Performance

## Dashboard pages
1. Management Overview: Revenue, Gross Profit, Operating Profit, margins and monthly trend.
2. Cost & Margin: COGS %, marketing, payroll, technology, other expenses and variance.

## DAX measures
Revenue = SUM(Financials[revenue])
COGS = SUM(Financials[cogs])
Gross Profit = [Revenue] - [COGS]
Operating Expenses = SUM(Financials[marketing]) + SUM(Financials[payroll]) + SUM(Financials[technology]) + SUM(Financials[other])
Operating Profit = [Gross Profit] - [Operating Expenses]
Gross Margin % = DIVIDE([Gross Profit], [Revenue])
Operating Margin % = DIVIDE([Operating Profit], [Revenue])

## Business insights
- Revenue is ₹8.50 lakh in January and ₹13.40 lakh in August, a 57.65% increase.
- August gross margin is 47.0%.
- August operating margin is 16.55%.
- Operating profit rises from ₹0.65 lakh to ₹2.22 lakh.
- Action: track incremental growth together with gross and operating margin.
