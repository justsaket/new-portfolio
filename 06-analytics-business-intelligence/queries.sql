-- Customer segmentation and LTV
SELECT segment, COUNT(*) AS customers,
SUM(metric_1) AS segment_value,
AVG(metric_3) AS avg_ltv
FROM analytics_data
WHERE domain = 'Customer'
GROUP BY segment
ORDER BY segment_value DESC;

-- HR attrition proxy exploration
SELECT segment AS department,
AVG(metric_2) AS avg_tenure,
AVG(metric_4) AS avg_overtime_signal,
AVG(metric_5) AS avg_satisfaction
FROM analytics_data
WHERE domain = 'HR'
GROUP BY segment;

-- Financial management view
SELECT entity AS month,
metric_1 AS revenue,
metric_4 AS operating_profit,
metric_5 AS operating_margin
FROM analytics_data
WHERE domain = 'Finance'
ORDER BY entity;

-- Fund comparison
SELECT entity AS fund,
segment,
metric_1 AS return_pct,
metric_2 AS volatility_pct,
metric_4 AS max_drawdown_pct,
metric_5 AS risk_adjusted_score
FROM analytics_data
WHERE domain = 'Fund'
ORDER BY return_pct DESC;