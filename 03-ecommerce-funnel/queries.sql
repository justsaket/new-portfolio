SELECT SUM(visits) visits,SUM(purchases) purchases,ROUND(100.0*SUM(purchases)/SUM(visits),2) conversion_pct,SUM(revenue) revenue FROM funnel;
SELECT source,SUM(visits) visits,SUM(purchases) purchases,ROUND(100.0*SUM(purchases)/SUM(visits),2) conversion_pct,SUM(revenue) revenue FROM funnel GROUP BY source ORDER BY conversion_pct DESC;
