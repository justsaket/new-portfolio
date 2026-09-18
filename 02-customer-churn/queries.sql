SELECT COUNT(*) customers,SUM(churned) churned_customers,ROUND(100.0*AVG(churned),2) churn_rate_pct FROM customers;
SELECT plan,COUNT(*) customers,ROUND(100.0*AVG(churned),2) churn_rate_pct FROM customers GROUP BY plan ORDER BY churn_rate_pct DESC;
SELECT CASE WHEN tenure_months<=6 THEN '0-6' WHEN tenure_months<=12 THEN '7-12' WHEN tenure_months<=24 THEN '13-24' ELSE '25+' END tenure_band,ROUND(100.0*AVG(churned),2) churn_rate_pct FROM customers GROUP BY 1;
