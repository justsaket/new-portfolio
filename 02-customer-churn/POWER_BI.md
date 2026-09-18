# Power BI Dashboard — Customer Churn

## Dashboard pages
1. Retention Overview: Customers, Churned, Churn Rate, tenure, logins, churn by plan.
2. Churn Drivers: support tickets vs logins, churned customer table, plan/tenure slicers.

## DAX measures
Customers = DISTINCTCOUNT(Customers[customer_id])
Churned Customers = CALCULATE([Customers], Customers[churned] = 1)
Churn Rate = DIVIDE([Churned Customers], [Customers])
Avg Tenure = AVERAGE(Customers[tenure_months])
Avg Logins = AVERAGE(Customers[logins_last_30d])

## Business insights
- Sample churn rate is 40%: 8 of 20 customers.
- Basic churn is 71.4%; Standard 50%; Premium 0% in this sample.
- Churned customers average 5.5 support tickets and 4.5 recent logins.
- These are descriptive sample patterns, not causal proof.
- Action: flag low-login/high-ticket customers and test retention interventions.
