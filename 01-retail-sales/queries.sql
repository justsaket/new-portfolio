SELECT SUM(sales) revenue,SUM(sales-cost) profit,ROUND(100.0*SUM(sales-cost)/SUM(sales),2) margin_pct FROM retail_sales;
SELECT region,SUM(sales) revenue,SUM(sales-cost) profit FROM retail_sales GROUP BY region ORDER BY profit DESC;
SELECT DATE_TRUNC('month',date) month,SUM(sales) revenue FROM retail_sales GROUP BY 1 ORDER BY 1;
